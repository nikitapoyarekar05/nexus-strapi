import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageRegion extends Struct.ComponentSchema {
  collectionName: 'components_about_page_regions';
  info: {
    displayName: 'region';
  };
  attributes: {
    keyCities: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
  };
}

export interface AboutPageTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_about_page_team_members';
  info: {
    displayName: 'TeamMember';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.Text;
  };
}

export interface FooterLinkFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_footer_links';
  info: {
    displayName: 'FooterLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    uniqueId: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'FooterColumn';
  };
  attributes: {
    ColumnHeader: Schema.Attribute.String;
    ColumnLink1: Schema.Attribute.Component<'footer-link.footer-link', true>;
    ColumnLink2: Schema.Attribute.Component<'footer-link.footer-link', true>;
  };
}

export interface TestimonialClient extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_clients';
  info: {
    displayName: 'Client';
  };
  attributes: {
    city: Schema.Attribute.String;
    name: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.region': AboutPageRegion;
      'about-page.team-member': AboutPageTeamMember;
      'faq.item': FaqItem;
      'footer-link.footer-link': FooterLinkFooterLink;
      'footer.footer': FooterFooter;
      'testimonial.client': TestimonialClient;
    }
  }
}
