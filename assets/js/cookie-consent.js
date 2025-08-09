(function(){
  const KEY = 'dalildz_cookie_consent_v1';
  if (localStorage.getItem(KEY)) return;
  const bar = document.createElement('div');
  bar.dir = 'rtl';
  bar.innerHTML = `
    <div class="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:end-4 z-[1000] max-w-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg p-4">
      <div class="flex items-start gap-3">
        <div class="text-2xl">🍪</div>
        <div class="text-sm text-gray-700 dark:text-gray-300">
          نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض محتوى وإعلانات ملائمة. بمتابعتك التصفح فإنك توافق على ذلك.
          اطلع على <a href="privacy.html" class="text-primary hover:underline">سياسة الخصوصية</a>.
        </div>
      </div>
      <div class="mt-3 flex items-center justify-end gap-2">
        <button id="cc-decline" class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm">رفض</button>
        <button id="cc-accept" class="px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-sky-600 text-sm">موافقة</button>
      </div>
    </div>`;
  document.body.appendChild(bar);
  const accept = bar.querySelector('#cc-accept');
  const decline = bar.querySelector('#cc-decline');
  function close(consent){
    try { localStorage.setItem(KEY, consent ? 'accepted' : 'declined'); } catch(e) {}
    bar.remove();
  }
  accept?.addEventListener('click', ()=> close(true));
  decline?.addEventListener('click', ()=> close(false));
})();
