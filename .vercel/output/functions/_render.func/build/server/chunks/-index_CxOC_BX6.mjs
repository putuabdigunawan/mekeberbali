import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_FPTJsa35.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DAIXWK2Z.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lowongan",
  "meta_title": "",
  "description": "",
  "page_title": "Careers In Pinwheel",
  "image": "/images/career/career-hero-image.png",
  "benefits": {
    "title": "Competitive salary",
    "description": "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque",
    "benefit_list": [{
      "title": "Competitive salary",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#24A1FF",
      "icon": "briefcase"
    }, {
      "title": "100% remote",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#7B5AFF",
      "icon": "aperture"
    }, {
      "title": "Unlimited PTO",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#FDC528",
      "icon": "umbrella"
    }, {
      "title": "Flexible HOURS",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#FF5874",
      "icon": "clock"
    }, {
      "title": "Medical insurance",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#12E189",
      "icon": "plusSquare"
    }, {
      "title": "Career growth",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#E545FF",
      "icon": "barChart"
    }]
  },
  "sidebar_content": {
    "enable": true,
    "title": "Apply today",
    "content": "Management, investments. You’ll be on arguably the most important position at the company the front lines helping",
    "button": {
      "enable": true,
      "label": "Apply Now",
      "link": "#"
    }
  },
  "career": {
    "title": "Lowongan Kerja Bali 2025",
    "subtitle": "Khusus area Bali seperti Denpasar, Tabanan, Badung, Ubud, Klungkung, Singaraja, Uluwatu, Jimbaran"
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada Mauris ", createVNode("br", {}), " pellentesque nec egestas non nisi Cras"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/lowongan/-index.mdx";
const file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/lowongan/-index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/lowongan/-index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
