export interface AboutContent {
  title: string;
  body: string;
}

export class AboutController {
  static getAboutContent(): AboutContent {
    return {
      title: "Built for wholesale buyers",
      body: "Alikhan is a B2B product catalog focused on clear listings, transparent wholesale pricing, and reliable supplier capacity.",
    };
  }
}
