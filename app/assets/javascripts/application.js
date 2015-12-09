// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require spin
//= require jquery.spin
//= require gritter
//= require react
//= require react_ujs
//= require jquery_nested_form
//= require jquery-ui
//= require components
//= require ckeditor/init

$(document).ajaxError(function(event, request) {
  var msg = JSON.parse(request.responseText);
  if (msg) msg.forEach(function(e) {
    notie.alert(3, "Error: " + e, 2.5);
  })
});

var ready;
ready = function() {
	$('#profile').click(function(e) {
		e.preventDefault;
    $('.profile_nav').fadeToggle();
    $('.nav-choice').toggleClass('fa-arrow-down');
		$('.nav-choice').toggleClass('fa-arrow-up');
	});
   $("#tabs").tabs();

   cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    // $('.leaderboard_campaign a img').each(function(i, img) {
    //   $(img).attr('src', '/assets/devil.jpg');
    // });
    // $('.leaderboard_title').each(function(i, title) {
    //   $(title).html('SATAN');
    // });

    window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
   });

   window.notie=function(){function e(){_=document.body.style.height,ee=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"}function t(){document.body.style.height=_,document.body.style.overflow=ee}function n(e,t,n){document.activeElement.blur(),de++,setTimeout(function(){de--},1e3*h+10),1==de&&(se?(clearTimeout(oe),clearTimeout(le),o(function(){i(e,t,n)})):i(e,t,n))}function i(e,t,n){se=!0;var i=0;if("undefined"==typeof n)var i=3e3;else i=1>n?1e3:1e3*n;switch(e){case 1:te.style.backgroundColor=b;break;case 2:te.style.backgroundColor=x;break;case 3:te.style.backgroundColor=v;break;case 4:te.style.backgroundColor=w}ie.innerHTML=t,te.style.top="-10000px",te.style.display="table",te.style.top="-"+te.offsetHeight-5+"px",oe=setTimeout(function(){c&&(te.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),te.style.MozTransition="all "+h+"s ease",te.style.WebkitTransition="all "+h+"s ease",te.style.transition="all "+h+"s ease",te.style.top=0,le=setTimeout(function(){o(function(){})},i)},20)}function o(e){te.style.top="-"+te.offsetHeight-5+"px",setTimeout(function(){c&&(te.style.boxShadow=""),te.style.MozTransition="",te.style.WebkitTransition="",te.style.transition="",te.style.top="-10000px",se=!1,e&&e()},1e3*h+10)}function l(e,t,n,i){document.activeElement.blur(),se?(clearTimeout(oe),clearTimeout(le),o(function(){s(e,t,n,i)})):s(e,t,n,i)}function s(t,n,i,o){function l(){pe.innerHTML=t,fe.innerHTML=n,he.innerHTML=i,ae.style.top="-10000px",ae.style.display="table",ae.style.top="-"+ae.offsetHeight-5+"px",re.style.display="block",setTimeout(function(){c&&(ae.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),ae.style.MozTransition="all "+h+"s ease",ae.style.WebkitTransition="all "+h+"s ease",ae.style.transition="all "+h+"s ease",ae.style.top=0,re.style.opacity="0.75",setTimeout(function(){me=!0},1e3*h+10)},20)}e(),ce.onclick=function(){d(),setTimeout(function(){o()},1e3*h+10)},me?(d(),setTimeout(function(){l()},1e3*h+10)):l()}function d(){ae.style.top="-"+ae.offsetHeight-5+"px",re.style.opacity="0",setTimeout(function(){c&&(ae.style.boxShadow=""),ae.style.MozTransition="",ae.style.WebkitTransition="",ae.style.transition="",re.style.display="none",ae.style.top="-10000px",t(),me=!1},1e3*h+10)}function a(e,t,n,i,l,s,d){document.activeElement.blur(),setTimeout(function(){ge.focus()},1e3*h),ge.setAttribute("type",i),ge.setAttribute("placeholder",l),ge.value="","undefined"!=typeof d&&d.length>0&&(ge.value=d),se?(clearTimeout(oe),clearTimeout(le),o(function(){r(e,t,n,s)})):r(e,t,n,s)}function r(t,n,i,o){function l(){ze.innerHTML=t,Ee.innerHTML=n,Ce.innerHTML=i,be.style.top="-10000px",be.style.display="table",be.style.top="-"+be.offsetHeight-5+"px",xe.style.display="block",setTimeout(function(){c&&(be.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),be.style.MozTransition="all "+h+"s ease",be.style.WebkitTransition="all "+h+"s ease",be.style.transition="all "+h+"s ease",be.style.top=0,xe.style.opacity="0.75",setTimeout(function(){Se=!0},1e3*h+10)},20)}e(),Te.onclick=function(){y(),setTimeout(function(){o(ge.value)},1e3*h+10)},Se?(y(),setTimeout(function(){l()},1e3*h+10)):l()}function y(){be.style.top="-"+be.offsetHeight-5+"px",xe.style.opacity="0",setTimeout(function(){c&&(be.style.boxShadow=""),be.style.MozTransition="",be.style.WebkitTransition="",be.style.transition="",xe.style.display="none",be.style.top="-10000px",t(),Se=!1},1e3*h+10)}var c=!0,u="18px",p="24px",f=600,h=.3,m=!0,b="#57BF57",x="#E3B771",v="#E1715B",w="#4D82D6",g="#FFF",T="#4D82D6",k="#57BF57",z="#E1715B",E="#FFF",C="#FFF",S="#FFF",F="notie-alert-outer",W="notie-alert-inner",L="notie-alert-text",M="notie-confirm-outer",H="notie-confirm-inner",A="notie-confirm-background",I="notie-confirm-yes",B="notie-confirm-no",D="notie-confirm-text",R="notie-confirm-yes-text",j="notie-confirm-no-text",q="notie-input-outer",G="notie-input-inner",J="notie-input-background",K="notie-input-div",N="notie-input-field",O="notie-input-yes",P="notie-input-no",Q="notie-input-text",U="notie-input-yes-text",V="notie-input-no-text",X=function(e){window.innerWidth<=f?e.style.fontSize=u:e.style.fontSize=p},Y=500,Z=function(e,t,n){var i;return function(){var o=this,l=arguments,s=function(){i=null,n||e.apply(o,l)},d=n&&!i;clearTimeout(i),i=setTimeout(s,t),d&&e.apply(o,l)}};window.addEventListener("keydown",function(e){var t=13==e.which||13==e.keyCode,n=27==e.which||27==e.keyCode;se?(t||n)&&(clearTimeout(oe),clearTimeout(le),o()):me?t?ce.click():n&&ue.click():Se&&(t?Te.click():n&&ke.click())}),"undefined"==typeof Element.prototype.addEventListener&&(Element.prototype.addEventListener=Window.prototype.addEventListener=function(e,t){return e="on"+e,this.attachEvent(e,t)});var _,ee,te=document.createElement("div");te.id=F,te.style.position="fixed",te.style.top="0",te.style.left="0",te.style.zIndex="999999999",te.style.height="auto",te.style.width="100%",te.style.display="none",te.style.textAlign="center",te.style.cursor="default",te.style.MozTransition="",te.style.WebkitTransition="",te.style.transition="",te.style.cursor="pointer",te.onclick=function(){clearTimeout(oe),clearTimeout(le),o()};var ne=document.createElement("div");ne.id=W,ne.style.padding="20px",ne.style.display="table-cell",ne.style.verticalAlign="middle",te.appendChild(ne);var ie=document.createElement("span");ie.id=L,ie.style.color=g,window.innerWidth<=f?ie.style.fontSize=u:ie.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ie),Y),!0),ne.appendChild(ie),$(document).ready(function(){document.body.appendChild(te)});var oe,le,se=!1,de=0,ae=document.createElement("div");ae.id=M,ae.style.position="fixed",ae.style.top="0",ae.style.left="0",ae.style.zIndex="999999998",ae.style.height="auto",ae.style.width="100%",ae.style.display="none",ae.style.textAlign="center",ae.style.MozTransition="",ae.style.WebkitTransition="",ae.style.transition="";var re=document.createElement("div");re.id=A,re.style.position="fixed",re.style.top="0",re.style.left="0",re.style.zIndex="999999997",re.style.height="100%",re.style.width="100%",re.style.display="none",re.style.backgroundColor="white",re.style.MozTransition="all "+h+"s ease",re.style.WebkitTransition="all "+h+"s ease",re.style.transition="all "+h+"s ease",re.style.opacity="0",re.onclick=function(){m&&d()};var ye=document.createElement("div");ye.id=H,ye.style.boxSizing="border-box",ye.style.width="100%",ye.style.padding="20px",ye.style.display="block",ye.style.cursor="default",ye.style.backgroundColor=T,ae.appendChild(ye);var ce=document.createElement("div");ce.id=I,ce.style.cssFloat="left",ce.style.height="50px",ce.style.lineHeight="50px",ce.style.width="50%",ce.style.cursor="pointer",ce.style.backgroundColor=k,ae.appendChild(ce);var ue=document.createElement("div");ue.id=B,ue.style.cssFloat="right",ue.style.height="50px",ue.style.lineHeight="50px",ue.style.width="50%",ue.style.cursor="pointer",ue.style.backgroundColor=z,ue.onclick=function(){d()},ae.appendChild(ue);var pe=document.createElement("span");pe.id=D,pe.style.color=E,window.innerWidth<=f?pe.style.fontSize=u:pe.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,pe),Y),!0),ye.appendChild(pe);var fe=document.createElement("span");fe.id=R,fe.style.color=C,window.innerWidth<=f?fe.style.fontSize=u:fe.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,fe),Y),!0),ce.appendChild(fe);var he=document.createElement("span");he.id=j,he.style.color=S,window.innerWidth<=f?he.style.fontSize=u:he.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,he),Y),!0),ue.appendChild(he),document.body.appendChild(ae),document.body.appendChild(re);var me=!1,be=document.createElement("div");be.id=q,be.style.position="fixed",be.style.top="0",be.style.left="0",be.style.zIndex="999999998",be.style.height="auto",be.style.width="100%",be.style.display="none",be.style.textAlign="center",be.style.MozTransition="",be.style.WebkitTransition="",be.style.transition="";var xe=document.createElement("div");xe.id=J,xe.style.position="fixed",xe.style.top="0",xe.style.left="0",xe.style.zIndex="999999997",xe.style.height="100%",xe.style.width="100%",xe.style.display="none",xe.style.backgroundColor="white",xe.style.MozTransition="all "+h+"s ease",xe.style.WebkitTransition="all "+h+"s ease",xe.style.transition="all "+h+"s ease",xe.style.opacity="0",xe.onclick=function(){m&&y()};var ve=document.createElement("div");ve.id=G,ve.style.boxSizing="border-box",ve.style.width="100%",ve.style.padding="20px",ve.style.display="block",ve.style.cursor="default",ve.style.backgroundColor=T,be.appendChild(ve);var we=document.createElement("div");we.id=K,we.style.boxSizing="border-box",we.style.height="55px",we.style.width="100%",we.style.display="block",we.style.cursor="default",we.style.backgroundColor="#FFF",be.appendChild(we);var ge=document.createElement("input");ge.id=N,ge.setAttribute("autocomplete","off"),ge.setAttribute("autocorrect","off"),ge.setAttribute("autocapitalize","off"),ge.setAttribute("spellcheck","false"),ge.style.boxSizing="border-box",ge.style.height="55px",ge.style.width="100%",ge.style.textAlign="center",ge.style.textIndent="10px",ge.style.paddingRight="10px",ge.style.outline="0",ge.style.border="0",ge.style.fontFamily="inherit",ge.style.fontSize=p,window.innerWidth<=f?ge.style.fontSize=u:ge.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ge),Y),!0),we.appendChild(ge);var Te=document.createElement("div");Te.id=O,Te.style.cssFloat="left",Te.style.height="50px",Te.style.lineHeight="50px",Te.style.width="50%",Te.style.cursor="pointer",Te.style.backgroundColor=k,be.appendChild(Te);var ke=document.createElement("div");ke.id=P,ke.style.cssFloat="right",ke.style.height="50px",ke.style.lineHeight="50px",ke.style.width="50%",ke.style.cursor="pointer",ke.style.backgroundColor=z,ke.onclick=function(){y()},be.appendChild(ke);var ze=document.createElement("span");ze.id=Q,ze.style.color=E,window.innerWidth<=f?ze.style.fontSize=u:ze.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ze),Y),!0),ve.appendChild(ze);var Ee=document.createElement("span");Ee.id=U,Ee.style.color=C,window.innerWidth<=f?Ee.style.fontSize=u:Ee.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,Ee),Y),!0),Te.appendChild(Ee);var Ce=document.createElement("span");Ce.id=V,Ce.style.color=S,window.innerWidth<=f?Ce.style.fontSize=u:Ce.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,Ce),Y),!0),ke.appendChild(Ce),document.body.appendChild(be),document.body.appendChild(xe);var Se=!1;return{alert:n,confirm:l,input:a}}();"undefined"!=typeof module&&module&&(module.exports=notie);
}

$(document).ready(ready)
$(document).on('page:load', ready)

!function(global){"use strict";function keydown(e){var id,k=e?e.keyCode:event.keyCode;if(!held[k]){held[k]=!0;for(id in sequences)sequences[id].keydown(k)}}function keyup(e){var k=e?e.keyCode:event.keyCode;held[k]=!1}function resetHeldKeys(){var k;for(k in held)held[k]=!1}function on(obj,type,fn){obj.addEventListener?obj.addEventListener(type,fn,!1):obj.attachEvent&&(obj["e"+type+fn]=fn,obj[type+fn]=function(){obj["e"+type+fn](window.event)},obj.attachEvent("on"+type,obj[type+fn]))}var cheet,Sequence,sequences={},keys={backspace:8,tab:9,enter:13,"return":13,shift:16,"⇧":16,control:17,ctrl:17,"⌃":17,alt:18,option:18,"⌥":18,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,L:37,"←":37,up:38,U:38,"↑":38,right:39,R:39,"→":39,down:40,D:40,"↓":40,insert:45,"delete":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,"⌘":91,command:91,kp_0:96,kp_1:97,kp_2:98,kp_3:99,kp_4:100,kp_5:101,kp_6:102,kp_7:103,kp_8:104,kp_9:105,kp_multiply:106,kp_plus:107,kp_minus:109,kp_decimal:110,kp_divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,equal:187,"=":187,comma:188,",":188,minus:189,"-":189,period:190,".":190},NOOP=function(){},held={};Sequence=function(str,next,fail,done){var i;for(this.str=str,this.next=next?next:NOOP,this.fail=fail?fail:NOOP,this.done=done?done:NOOP,this.seq=str.split(" "),this.keys=[],i=0;i<this.seq.length;++i)this.keys.push(keys[this.seq[i]]);this.idx=0},Sequence.prototype.keydown=function(keyCode){var i=this.idx;return keyCode!==this.keys[i]?void(i>0&&(this.reset(),this.fail(this.str),cheet.__fail(this.str))):(this.next(this.str,this.seq[i],i,this.seq),cheet.__next(this.str,this.seq[i],i,this.seq),void(++this.idx===this.keys.length&&(this.done(this.str),cheet.__done(this.str),this.reset())))},Sequence.prototype.reset=function(){this.idx=0},cheet=function(str,handlers){var next,fail,done;"function"==typeof handlers?done=handlers:null!==handlers&&void 0!==handlers&&(next=handlers.next,fail=handlers.fail,done=handlers.done),sequences[str]=new Sequence(str,next,fail,done)},cheet.disable=function(str){delete sequences[str]},on(window,"keydown",keydown),on(window,"keyup",keyup),on(window,"blur",resetHeldKeys),on(window,"focus",resetHeldKeys),cheet.__next=NOOP,cheet.next=function(fn){cheet.__next=null===fn?NOOP:fn},cheet.__fail=NOOP,cheet.fail=function(fn){cheet.__fail=null===fn?NOOP:fn},cheet.__done=NOOP,cheet.done=function(fn){cheet.__done=null===fn?NOOP:fn},cheet.reset=function(id){var seq=sequences[id];return seq instanceof Sequence?void seq.reset():void console.warn("cheet: Unknown sequence: "+id)},global.cheet=cheet,"function"==typeof define&&define.amd?define([],function(){return cheet}):"undefined"!=typeof module&&null!==module&&(module.exports=cheet)}(this);

/* global define */

(function (root, pluralize) {
  /* istanbul ignore else */
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // Node.
    module.exports = pluralize();
  } else if (typeof define === 'function' && define.amd) {
    // AMD, registers as an anonymous module.
    define(function () {
      return pluralize();
    });
  } else {
    // Browser global.
    root.pluralize = pluralize();
  }
})(this, function () {
  // Rule storage - pluralize and singularize need to be run sequentially,
  // while other rules can be optimized using an object for instant lookups.
  var pluralRules = [];
  var singularRules = [];
  var uncountables = {};
  var irregularPlurals = {};
  var irregularSingles = {};

  /**
   * Title case a string.
   *
   * @param  {string} str
   * @return {string}
   */
  function toTitleCase (str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  }

  /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */
  function sanitizeRule (rule) {
    if (typeof rule === 'string') {
      return new RegExp('^' + rule + '$', 'i');
    }

    return rule;
  }

  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */
  function restoreCase (word, token) {
    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
      return token.toUpperCase();
    }

    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
      return toTitleCase(token);
    }

    // Lower cased words. E.g. "test".
    return token.toLowerCase();
  }

  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */
  function interpolate (str, args) {
    return str.replace(/\$(\d{1,2})/g, function (match, index) {
      return args[index] || '';
    });
  }

  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {String}   token
   * @param  {String}   word
   * @param  {Array}    collection
   * @return {String}
   */
  function sanitizeWord (token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
      return word;
    }

    var len = collection.length;

    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
      var rule = collection[len];

      // If the rule passes, return the replacement.
      if (rule[0].test(word)) {
        return word.replace(rule[0], function (match, index, word) {
          var result = interpolate(rule[1], arguments);

          if (match === '') {
            return restoreCase(word[index - 1], result);
          }

          return restoreCase(match, result);
        });
      }
    }

    return word;
  }

  /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */
  function replaceWord (replaceMap, keepMap, rules) {
    return function (word) {
      // Get the correct token and case restoration functions.
      var token = word.toLowerCase();

      // Check against the keep object map.
      if (keepMap.hasOwnProperty(token)) {
        return restoreCase(word, token);
      }

      // Check against the replacement map for a direct word replacement.
      if (replaceMap.hasOwnProperty(token)) {
        return restoreCase(word, replaceMap[token]);
      }

      // Run all the rules against the word.
      return sanitizeWord(token, word, rules);
    };
  }

  /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {String}  word
   * @param  {Number}  count
   * @param  {Boolean} inclusive
   * @return {String}
   */
  function pluralize (word, count, inclusive) {
    var pluralized = count === 1
      ? pluralize.singular(word) : pluralize.plural(word);

    return (inclusive ? count + ' ' : '') + pluralized;
  }

  /**
   * Pluralize a word.
   *
   * @type {Function}
   */
  pluralize.plural = replaceWord(
    irregularSingles, irregularPlurals, pluralRules
  );

  /**
   * Singularize a word.
   *
   * @type {Function}
   */
  pluralize.singular = replaceWord(
    irregularPlurals, irregularSingles, singularRules
  );

  /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addPluralRule = function (rule, replacement) {
    pluralRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */
  pluralize.addSingularRule = function (rule, replacement) {
    singularRules.push([sanitizeRule(rule), replacement]);
  };

  /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */
  pluralize.addUncountableRule = function (word) {
    if (typeof word === 'string') {
      uncountables[word.toLowerCase()] = true;
      return;
    }

    // Set singular and plural references for the word.
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  };

  /**
   * Add an irregular word definition.
   *
   * @param {String} single
   * @param {String} plural
   */
  pluralize.addIrregularRule = function (single, plural) {
    plural = plural.toLowerCase();
    single = single.toLowerCase();

    irregularSingles[single] = plural;
    irregularPlurals[plural] = single;
  };

  /**
   * Irregular rules.
   */
  [
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['thief', 'thieves'],
    ['genie', 'genies'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies']
  ].forEach(function (rule) {
    return pluralize.addIrregularRule(rule[0], rule[1]);
  });

  /**
   * Pluralization rules.
   */
  [
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you']
  ].forEach(function (rule) {
    return pluralize.addPluralRule(rule[0], rule[1]);
  });

  /**
   * Singularization rules.
   */
  [
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/([^aeiouy]|qu)ies$/i, '$1y'],
    [/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i, '$1ie'],
    [/(\b(?:mon|smil))ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man']
  ].forEach(function (rule) {
    return pluralize.addSingularRule(rule[0], rule[1]);
  });

  /**
   * Uncountable rules.
   */
  [
    // Singular words with no plurals.
    'advice',
    'adulthood',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'athletics',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'commerce',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'media',
    'mews',
    'moose',
    'music',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'traffic',
    'transporation',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i, // "chickpox", "smallpox"
    /ois$/i,
    /deer$/i, // "deer", "reindeer"
    /fish$/i, // "fish", "blowfish", "angelfish"
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i // "chinese", "japanese"
  ].forEach(pluralize.addUncountableRule);

  return pluralize;
});