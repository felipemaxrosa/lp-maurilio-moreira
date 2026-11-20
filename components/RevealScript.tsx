/**
 * Script inline que dirige o reveal em CSS (classe `.reveal`), **sem nunca
 * deixar conteúdo branco no 1º paint** — em qualquer página.
 *
 * Princípio: o conteúdo é visível por padrão no HTML. Depois do DOMContentLoaded
 * (quando já há layout), o script mede cada `.reveal`:
 *   - Se COMEÇA abaixo da dobra → esconde (classe `reveal-off`, invisível ao
 *     usuário pois está fora da tela) e observa pra animar quando entrar na view.
 *   - Se está NA/ACIMA da dobra → deixa visível, sem animar. Assim o conteúdo do
 *     topo (ex.: grid do /mandato) nunca pisca em branco esperando o observer.
 *
 * Tudo roda fora do bundle pesado (motion/lenis), então não espera a hidratação.
 * Um MutationObserver cobre navegação SPA e remounts (ex.: filtro do Placar).
 * Respeita prefers-reduced-motion (não esconde nada → tudo visível e estático).
 */
const REVEAL_SCRIPT = `(function(){try{
var d=document,w=window;
if(w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
function setup(){
if(!('IntersectionObserver' in w))return;
var io=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.classList.add('is-visible');io.unobserve(es[i].target);}}},{rootMargin:'0px 0px -40px 0px',threshold:0});
function arm(el){
if(el.__rev)return;el.__rev=1;
var r=el.getBoundingClientRect();
if(r.top>=(w.innerHeight||0)){el.classList.add('reveal-off');io.observe(el);}
}
function scan(){var els=d.querySelectorAll('.reveal');for(var i=0;i<els.length;i++)arm(els[i]);}
scan();
var mo=new MutationObserver(scan);mo.observe(d.body,{childList:true,subtree:true});
}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',setup);else setup();
}catch(e){}})();`;

/** Server component: injeta o script inline. Renderizar cedo no <body>. */
export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />;
}
