import { c as createAstro, a as createComponent, d as renderComponent, h as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_FPTJsa35.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_-nsSh3wL.mjs';
import { m as markdownify } from '../chunks/ClientRouter_Ba-Ivvbk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mekeber.com");
const $$PasswordReset = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PasswordReset;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="px-4 max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]"> <div class="mx-auto w-full max-w-[480px]"> <img class="mb-8" src="/images/flower.png" alt=""> <h1 class="mb-4">Password Reset</h1> <p>
Enter the email address for your account to request a password
              reset. An email will be sent to the email address on your account
              with a reset link.
</p> <form action="#"> <div class="form-group"> <label for="email" class="form-label">Email Address</label> <input type="email" id="email" class="form-control" placeholder="Your Email Address"> </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Reset Password"> <p class="mt-6 text-center">
Don't have an account?
<a class="text-text-dark" href="/signup">Sign up</a> to create one.
<br>Or <a class="text-text-dark" href="/signin">Sign in</a> to
                your account.
</p> </form> </div> </div> <!-- Swiper Section --> <div class="auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6 lg:block overflow-hidden"> <img class="absolute left-0 top-0 h-full w-full" src="/images/login-banner-bg.png" alt="bg-image"> <div class="w-full text-center"> <h2 class="h3 text-white">${unescapeHTML(markdownify("Make all your dreams<br/>come true"))}</h2> <div class="auth-banner-carousel"> <div class="swiper-container"> <div class="swiper-wrapper"> <!-- Static Image Slides for Demo --> <div class="swiper-slide"> <img width="667" height="557" class="mx-auto" src="/images/signup-carousel-img-1.png" alt=""> </div> <div class="swiper-slide"> <img width="667" height="557" class="mx-auto" src="/images/signup-carousel-img-1.png" alt=""> </div> <div class="swiper-slide"> <img width="667" height="557" class="mx-auto" src="/images/signup-carousel-img-1.png" alt=""> </div> </div> <div class="relative flex justify-center"> <div class="pagination"></div> </div> </div> </div> </div> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/password-reset.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/password-reset.astro", void 0);

const $$file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/pages/password-reset.astro";
const $$url = "/password-reset";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PasswordReset,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
