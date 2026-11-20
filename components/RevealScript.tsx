/**
 * Script inline pré-paint que dirige o reveal em CSS (classe `.reveal`).
 *
 * Por que inline e não um componente client? Para o conteúdo NUNCA depender do
 * bundle pesado (motion/lenis/etc.). Este script:
 *   1. Roda antes do paint (primeiro filho do <body>) e adiciona `js-reveal` ao
 *      <html>, fazendo os `.reveal` já pintarem escondidos — sem flash.
 *   2. No DOMContentLoaded cria um IntersectionObserver minúsculo que adiciona
 *      `.is-visible` conforme cada bloco entra na viewport (revela uma vez).
 *   3. Um MutationObserver re-escaneia quando novo `.reveal` entra no DOM —
 *      cobre navegação SPA e o remount do grid do Placar ao trocar filtro.
 *   4. Respeita prefers-reduced-motion (não ativa nada → conteúdo visível), e
 *      se não houver IntersectionObserver, revela tudo na hora.
 */
const REVEAL_SCRIPT = `(function(){try{
var d=document,r=d.documentElement;
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
r.classList.add('js-reveal');
var show=function(el){el.classList.add('is-visible');};
var setup=function(){
if(!('IntersectionObserver' in window)){var a=d.querySelectorAll('.reveal');for(var i=0;i<a.length;i++)show(a[i]);return;}
var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){show(es[i].target);io.unobserve(es[i].target);}}},{rootMargin:'0px 0px -10% 0px',threshold:0.15});
var scan=function(){var els=d.querySelectorAll('.reveal:not(.is-visible)');for(var i=0;i<els.length;i++)io.observe(els[i]);};
scan();
if(d.body){var mo=new MutationObserver(function(){scan();});mo.observe(d.body,{childList:true,subtree:true});}
};
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',setup);else setup();
}catch(e){}})();`;

/** Server component: injeta o script inline. Renderizar cedo no <body>. */
export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />;
}
