(function(){
  'use strict';
  const CAT_KEY = 'dalildz_categories_json';
  const SVC_KEY = 'dalildz_services_json';

  const $ = (s)=>document.querySelector(s);
  const catsTxt = $('#catsTxt');
  const svcsTxt = $('#svcsTxt');
  const catsLoad = $('#catsLoad');
  const svcsLoad = $('#svcsLoad');
  const catsSave = $('#catsSave');
  const svcsSave = $('#svcsSave');
  const catsFile = $('#catsFile');
  const svcsFile = $('#svcsFile');
  const catsExport = $('#catsExport');
  const svcsExport = $('#svcsExport');

  function pretty(obj) {
    return JSON.stringify(obj, null, 2);
  }
  function parse(text) {
    try { return JSON.parse(text); } catch { return null; }
  }
  function isArray(a){ return Array.isArray(a); }

  function downloadJSON(filename, dataObj) {
    const blob = new Blob([pretty(dataObj)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  function loadFromSite(kind){
    try {
      if (kind === 'cats') {
        const fromDalil = (window.DalilData && window.DalilData.categories) || [];
        const fromLS = JSON.parse(localStorage.getItem(CAT_KEY) || 'null');
        const val = isArray(fromLS) ? fromLS : (isArray(fromDalil) ? fromDalil : []);
        catsTxt.value = pretty(val);
      } else {
        const fromDalil = (window.DalilData && window.DalilData.services) || [];
        const fromLS = JSON.parse(localStorage.getItem(SVC_KEY) || 'null');
        const val = isArray(fromLS) ? fromLS : (isArray(fromDalil) ? fromDalil : []);
        svcsTxt.value = pretty(val);
      }
    } catch (e) {
      alert('تعذر التحميل من الموقع: ' + e.message);
    }
  }

  function saveLocal(kind){
    const txt = (kind === 'cats') ? catsTxt.value : svcsTxt.value;
    const obj = parse(txt);
    if (!isArray(obj)) { alert('JSON غير صالح. يجب أن يكون مصفوفة.'); return; }
    if (kind === 'cats') {
      localStorage.setItem(CAT_KEY, JSON.stringify(obj));
      if (window.DalilData) window.DalilData.categories = obj;
    } else {
      localStorage.setItem(SVC_KEY, JSON.stringify(obj));
      if (window.DalilData) window.DalilData.services = obj;
    }
    alert('تم الحفظ محلياً. أعد تحميل صفحات الموقع للاعتماد.');
  }

  function importFile(inputEl, target){
    const file = inputEl.files && inputEl.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      if (target === 'cats') catsTxt.value = text; else svcsTxt.value = text;
    };
    reader.readAsText(file, 'utf-8');
    inputEl.value = '';
  }

  function exportJSON(kind){
    const txt = (kind === 'cats') ? catsTxt.value : svcsTxt.value;
    const obj = parse(txt);
    if (!isArray(obj)) { alert('JSON غير صالح.'); return; }
    const filename = (kind === 'cats') ? 'categories.json' : 'services.json';
    downloadJSON(filename, obj);
  }

  // Events
  catsLoad && catsLoad.addEventListener('click', ()=> loadFromSite('cats'));
  svcsLoad && svcsLoad.addEventListener('click', ()=> loadFromSite('svcs'));
  catsSave && catsSave.addEventListener('click', ()=> saveLocal('cats'));
  svcsSave && svcsSave.addEventListener('click', ()=> saveLocal('svcs'));
  catsFile && catsFile.addEventListener('change', ()=> importFile(catsFile, 'cats'));
  svcsFile && svcsFile.addEventListener('change', ()=> importFile(svcsFile, 'svcs'));
  catsExport && catsExport.addEventListener('click', ()=> exportJSON('cats'));
  svcsExport && svcsExport.addEventListener('click', ()=> exportJSON('svcs'));

  // Initial load
  loadFromSite('cats');
  loadFromSite('svcs');
})();
