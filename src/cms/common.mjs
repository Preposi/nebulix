import { t } from "@util/translate";

export const style = {
  name: "style",
  label: t("page_style"),
  widget: "object",
  summary: "{{fields.template}} ",
  collapsed: true,
  fields: [
    {
      name: "template",
      label: t("template"),
      widget: "select",
      options: ["full", "split"],
      default: "split",
    },
    {
      name: "card_template",
      label: t("card_template"),
      widget: "select",
      options: ["grid", "flex"],
      default: "grid",
      condition: {
        field: "style.template",
        value: "full",
      },
    },
    {
      name: "hero_template",
      label: t("hero_template"),
      widget: "select",
      options: ["plain", "image"],
      default: "image",
      condition: {
        field: "style.template",
        value: "full",
      },
    },

    {
      name: "hero_surface",
      label: t("hero_surface"),
      multiple: false,
      widget: "relation",
      collection: "config",
      file: "style",
      search_fields: ["surface.*.name"],
      display_fields: ["surface.*.name"],
      value_field: "surface.*.class",
      options_length: 50,
      required: false,
    },
    {
      name: "hero_image_opacity",
      label: t("hero_image_opacity"),
      widget: "select",
      options: [
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9",
        "1",
      ],
      default: "80",
      required: false,
    },

    {
      name: "container",
      label: t("container_size"),
      widget: "select",
      options: ["sm", "md", "lg", "xl", "full", "none"],
      default: "md",
      condition: {
        field: "style.template",
        value: "full",
      },
    },
    {
      label: t("page_class"),
      name: "page_class",
      widget: "string",
      required: false,
    },

    {
      label: t("content_class"),
      name: "content_class",
      widget: "string",
      required: false,
    },

    {
      label: t("block_class"),
      name: "block_class",
      widget: "string",
      required: false,
    },
    {
      label: t("hero_class"),
      name: "hero_class",
      widget: "string",
      required: false,
      condition: {
        field: "style.template",
        value: "full",
      },
    },
  ],
};

export const toolbarButtons = {
  main: [
    "bold",
    "italic",
    "strikethrough",
    "code",
    "font",
    "blockquote",
    "unordered-list",
    "ordered-list",
    "decrease-indent",
    "increase-indent",
    {
      label: t("insert"),
      groups: [
        {
          items: ["blockquote", "code-block"],
        },
        {
          items: ["image", "file-link"],
        },
      ],
    },
  ],
};

export const toolbarButtonsInline = {
  main: [
    "bold",
    "italic",
    "strikethrough",
    "code",
    "font",
    "unordered-list",
    "ordered-list",
    "decrease-indent",
    "increase-indent",
    {
      label: t("insert"),
      groups: [
        {
          items: ["blockquote", "code-block"],
        },
      ],
    },
  ],
};

export const buttons = {
  name: "buttons",
  label: t("buttons"),
  label_singular: t("button"),
  widget: "list",
  min: 0,
  max: 5,
  collapsed: true,
  summary: "{{fields.label}} | {{fields.href}}",
  required: false,
  fields: [
    {
      label: t("label"),
      name: "label",
      widget: "string",
    },
    {
      label: t("href"),
      name: "href",
      widget: "string",
    },
    {
      name: "color",
      label: t("surface"),
      multiple: false,
      widget: "relation",
      collection: "config",
      file: "style",
      search_fields: ["surface.*.name"],
      display_fields: ["surface.*.name"],
      value_field: "surface.*.class",
      options_length: 50,
      required: false,
    },
    {
      name: "icon",
      label: t("icon"),
      widget: "relation",
      collection: "config",
      required: false,
      file: "style",
      search_fields: ["icons.*.name"],
      display_fields: ["icons.*.name"],
      options_length: 50,
      value_field: "icons.*.icon",
    },

    {
      name: "icon_only",
      label: t("icon_only"),
      widget: "boolean",
      required: false,
    },

    {
      label: t("class"),
      name: "class_name",
      widget: "string",
      required: false,
    },
  ],
};

export const blocks = {
  name: "blocks",
  label: t("blocks"),
  label_singular: t("block"),
  required: false,
  widget: "list",

  collapsed: true,
  types: [
    {
      name: "gallery",
      label: t("gallery"),
      widget: "object",
      collapsed: true,
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "ImageGallery",
        },
        {
          name: "title",
          label: t("title"),
          widget: "string",
          default: t("image-gallery"),
        },

        {
          name: "container",
          label: t("container_size"),
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },
        {
          name: "aspect",
          label: t("aspect_ratio"),
          widget: "select",
          options: [1.777, 1.25, 1, 0.8, 0.5625],
          required: false,
        },

        {
          name: "images",
          label: t("images"),
          widget: "list",

          collapsed: true,
          fields: [
            {
              name: "image",
              label: t("image"),
              widget: "image",
            },
            {
              name: "title",
              label: t("title"),
              widget: "string",
              require: false,
            },
          ],
        },
        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
        {
          name: "animate",
          label: t("animate_transition"),
          widget: "boolean",
          required: false,
          default: false,
        },
      ],
    },
    {
      name: "text_image",
      label: t("text_image"),
      widget: "object",
      summary: "{{fields.content}} - {{fields.template}}",
      collapsed: true,
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "TextImage",
        },
        {
          name: "container",
          label: t("container_size"),
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full", "none"],
          default: "md",
        },

        {
          name: "template",
          label: t("template"),
          widget: "select",
          options: ["column", "row", "banner"],
          default: "column",
        },

        {
          name: "reverse",
          label: t("reverse"),
          widget: "boolean",
          default: false,
          hint: t("not_used_by_banner_template"),
        },

        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
        },
        buttons,

        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
        {
          name: "aspect",
          label: t("aspect_ratio"),
          widget: "select",
          options: [1.777, 1.25, 1, 0.8, 0.5625],
          required: false,
          hint: t("not_used_by_banner_template"),
        },

        {
          label: t("alt_text"),
          name: "title",
          widget: "string",
          default: "My Image",
        },
        {
          name: "image_size",
          hint: t("only_for_column_template"),
          label: t("image_size"),
          widget: "select",
          options: ["25", "33", "50", "66", "75"],
          default: "50",
          required: false,
        },
        {
          name: "thumbnail",
          label: t("image"),
          widget: "image",
        },
        {
          name: "animate",
          label: t("animate_transition"),
          widget: "boolean",
          required: false,
          default: false,
        },
      ],
    },

    {
      name: "rich_text",
      label: t("richtext"),
      widget: "object",
      summary: "{{fields.content}}",
      collapsed: true,
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "RichText",
        },
        {
          name: "container",
          label: t("container_size"),
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },

        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
        },
        buttons,

        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },

        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      name: "features",
      label: t("features"),
      widget: "object",
      summary: "{{fields.content}}",
      collapsed: true,
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "Features",
        },
        {
          name: "container",
          label: t("container_size"),
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },

        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
          required: false,
        },
        {
          name: "features",
          label: t("features"),
          label_singular: t("feature"),
          widget: "list",
          min: 0,
          max: 5,
          collapsed: true,
          summary: "{{fields.content}} | {{fields.href}}",
          fields: [
            /* {
							label: t('href'),
							name: 'href',
							widget: 'string',
							required: false
						}, */
            {
              label: t("color"),
              name: "color",
              multiple: false,
              widget: "relation",
              collection: "config",
              file: "style",
              search_fields: ["surface.*.name"],
              display_fields: ["surface.*.name"],
              value_field: "surface.*.class",
              options_length: 50,
              required: false,
            },
            {
              name: "icon",
              label: t("icon"),
              widget: "relation",
              collection: "config",
              required: false,
              file: "style",
              search_fields: ["icons.*.name"],
              display_fields: ["icons.*.name"],
              options_length: 50,
              value_field: "icons.*.icon",
            },
            {
              label: t("content"),
              name: "content",
              widget: "markdown",
              comment: "This is a multiline\\ncomment",
              toolbar_buttons: toolbarButtonsInline,
              required: false,
            },
          ],
        },
        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      name: "recentitems",
      label: t("recent_items"),
      widget: "object",
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "RecentItems",
        },
        {
          label: t("page_type"),
          name: "page_type",
          widget: "select",
          options: ["blog", "project", "menu"],
          default: "post",
        },
        {
          label: t("post_tag_filter"),
          name: "post_tag",
          widget: "relation",
          min: 0,
          max: 5,
          multiple: true,
          collection: "config",
          required: false,
          file: "blog",
          search_fields: ["blog_tags.*.name"],
          display_fields: ["blog_tags.*.name"],
          value_field: "blog_tags.*.name",
        },
        {
          label: t("project_tag_filter"),
          name: "portfolio_tag",
          widget: "relation",
          min: 0,
          max: 5,
          multiple: true,
          collection: "config",
          required: false,
          file: "project",
          search_fields: ["project_tags.*.name"],
          display_fields: ["project_tags.*.name"],
          value_field: "project_tags.*.name",
        },
        {
          label: t("number_of_items"),
          name: "count",
          widget: "number",
          required: true,
          value_type: "int",
          default: 5,
          min: 1,
          max: 25,
        },
        {
          label: t("title"),
          name: "title",
          widget: "string",
          required: false,
        },
        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
          required: false,
        },
        {
          label: t("container_size"),
          name: "container",
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },
        {
          label: t("template"),
          name: "template",
          widget: "select",
          options: ["grid", "list"],
          default: "column",
        },

        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          name: "animate",
          label: t("animate_transition"),
          widget: "boolean",
          required: false,
          default: false,
        },
      ],
    },

    {
      name: "shop_categories",
      label: t("shop_categories"),
      widget: "object",
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "ShopCategories",
        },
        {
          label: t("categories"),
          name: "categories",
          widget: "relation",
          min: 0,
          max: 1000,
          multiple: true,
          collection: "config",
          required: false,
          file: "shop",
          search_fields: ["product_categories.*.name"],
          display_fields: ["product_categories.*.name"],
          value_field: "product_categories.*.name",
        },

        {
          label: t("title"),
          name: "title",
          widget: "string",
          required: false,
        },
        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
          required: false,
        },
        {
          label: t("container_size"),
          name: "container",
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },
        {
          label: t("template"),
          name: "template",
          widget: "select",
          options: ["grid", "list", "flex"],
          default: "column",
        },

        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          name: "animate",
          label: t("animate_transition"),
          widget: "boolean",
          required: false,
          default: false,
        },
      ],
    },
    {
      name: "shop_products",
      label: t("shop_products"),
      widget: "object",
      summary: "{{fields.title}}",
      fields: [
        {
          label: "Component",
          name: "component",
          widget: "hidden",
          default: "ShopProducts",
        },
        {
          label: t("categories"),
          name: "categories",
          widget: "relation",
          min: 0,
          max: 1000,
          multiple: true,
          collection: "config",
          required: false,
          file: "shop",
          search_fields: ["product_categories.*.name"],
          display_fields: ["product_categories.*.name"],
          value_field: "product_categories.*.name",
        },
        {
          label: t("products"),
          name: "products",
          widget: "relation",
          min: 0,
          max: 1000,
          multiple: true,
          collection: "product",
          required: false,
          search_fields: ["title"],
          display_fields: ["title"],
          value_field: "id",
        },
        {
          label: t("number_of_items"),
          name: "count",
          widget: "number",
          required: true,
          value_type: "int",
          default: 10,
          min: 1,
          max: 99,
        },

        {
          label: t("title"),
          name: "title",
          widget: "string",
          required: false,
        },
        {
          label: t("content"),
          name: "content",
          widget: "markdown",
          comment: "This is a multiline\\ncomment",
          toolbar_buttons: toolbarButtonsInline,
          required: false,
        },
        {
          label: t("container_size"),
          name: "container",
          widget: "select",
          options: ["sm", "md", "lg", "xl", "full"],
          default: "md",
        },
        {
          label: t("template"),
          name: "template",
          widget: "select",
          options: ["grid", "list", "flex"],
          default: "column",
        },

        {
          label: t("block_class"),
          name: "block_class",
          widget: "string",
          required: false,
        },
        {
          name: "surface",
          label: t("surface"),
          multiple: false,
          widget: "relation",
          collection: "config",
          file: "style",
          search_fields: ["surface.*.name"],
          display_fields: ["surface.*.name"],
          value_field: "surface.*.class",
          options_length: 50,
          required: false,
        },
        {
          name: "animate",
          label: t("animate_transition"),
          widget: "boolean",
          required: false,
          default: false,
        },
      ],
    },
  ],
};
