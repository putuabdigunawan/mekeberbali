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
  "title": "libur cok",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "daftar-hari-libur",
    "text": "Daftar Hari libur"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    hr: "hr",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "daftar-hari-libur",
      children: "Daftar Hari libur"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "#"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Hari"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Libur"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:1 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:1 Cell:2"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:2 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:2 Cell:2"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:3 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:3 Cell:2"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {})]
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

const url = "/liburmas";
const file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/pages/liburmas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/pages/liburmas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
