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
  "title": "Pricing",
  "page_title": "Pinwheel Pricing",
  "meta_title": "",
  "description": "",
  "image": "",
  "pricing_card": [{
    "title": "Basic",
    "pre_currency": "$",
    "post_currency": "usd",
    "price": 29,
    "icon": "box",
    "description": "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    "featured": false,
    "buttons": {
      "buy_now": {
        "label": "Buy Now",
        "link": "#"
      },
      "free_trial": {
        "label": "Start Free trial",
        "link": "#"
      }
    },
    "services": {
      "title": "What's included?",
      "list": ["Track Reward Part Program", "Design and prototype powerful", "Keep work in unlimited storage", "Add people document handoff."]
    }
  }, {
    "title": "Enterprise",
    "pre_currency": "$",
    "post_currency": "usd",
    "price": 59,
    "icon": "table",
    "description": "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    "featured": true,
    "buttons": {
      "buy_now": {
        "label": "Buy Now",
        "link": "#"
      },
      "free_trial": {
        "label": "Start Free trial",
        "link": "#"
      }
    },
    "services": {
      "title": "What's included?",
      "list": ["Track Reward Part Program", "Design and prototype powerful", "Keep work in unlimited storage", "Add people document handoff."]
    }
  }, {
    "title": "Pro Lite",
    "pre_currency": "$",
    "post_currency": "usd",
    "price": 99,
    "icon": "briefcase",
    "description": "Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem ipsum.",
    "featured": false,
    "buttons": {
      "buy_now": {
        "label": "Buy Now",
        "link": "#"
      },
      "free_trial": {
        "label": "Start Free trial",
        "link": "#"
      }
    },
    "services": {
      "title": "What's included?",
      "list": ["Track Reward Part Program", "Design and prototype powerful", "Keep work in unlimited storage", "Add people document handoff."]
    }
  }],
  "faq": {
    "title": "Frequently Asked Questions",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia Curae Donec",
    "faq_list": [{
      "title": "How can I integrate Avocode to my current tool stack?",
      "content": "The Service is provided for free during this pilot project, and is provided \"as is\" with is not committed to any level of service or availability of the Service."
    }, {
      "title": "How can I integrate Avocode to my current tool stack?",
      "content": "The Service is provided for free during this pilot project, and is provided \"as is\" with is not committed to any level of service or availability of the Service."
    }, {
      "title": "How can I integrate Avocode to my current tool stack?",
      "content": "The Service is provided for free during this pilot project, and is provided \"as is\" with is not committed to any level of service or availability of the Service."
    }, {
      "title": "How can I integrate Avocode to my current tool stack?",
      "content": "The Service is provided for free during this pilot availability of the Service.</br> If you enter into this agreement on behalf of a company, you hereby agree that the company is responsible under this Agreement for all actions and"
    }, {
      "title": "Anjing tetap lah anjing",
      "content": "Bagaimana anjing itu anjing"
    }]
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
    children: ["Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada. Mauris ", createVNode("br", {}), "\npellentesque nec, egestas non nisi. Cras ultricies ligula sed magna"]
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
const url = "src/content/pricing/-index.mdx";
const file = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/pricing/-index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/user/Documents/all_project/astroboy/pinwheel-astro-main/src/content/pricing/-index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
