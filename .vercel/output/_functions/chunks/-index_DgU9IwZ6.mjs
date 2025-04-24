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
  "title": "Integrations",
  "page_title": "How To Integrate <br/> With Pinwheel",
  "meta_title": "",
  "description": "",
  "image": ""
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
    children: ["Donec sollicitudin molestie malesda. Donec sollitudin molestie ", createVNode("br", {}), " malesuada Mauris pellentesque nec egestas non nisi Cras"]
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
const url = "src/content/integrations/-index.mdx";
const file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/integrations/-index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/integrations/-index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
