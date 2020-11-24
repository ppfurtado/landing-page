const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      sectionAboutProject {
        image {
          alternativeText
          url
        }
        title
        description
      }
      sectionTech {
        title
        techIcon {
          icon {
            alternativeText
            url
          }
          title
        }
      }
      sectionConcepts {
        title
        concepts {
          title
        }
      }
      sectionModules {
        title
        modules {
          title
          subtitle
        }
      }
      sectionAgenda {
        title
        description
      }
      pricingBox {
        totalPrice
        numberInstallments
        priceInstallment
        benefits
        button {
          label
          url
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
