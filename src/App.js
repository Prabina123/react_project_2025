import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const StyleCard = {
  background: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const info = resData?.card?.card?.info;
  if (!info) return null; // skip non-restaurant cards

  const { name, cuisines = [], avgRating, cloudinaryImageId } = info;

  return (
    <div className="res-card" style={StyleCard}>
      <img
        className="res-logo"
        alt={name || "res-logo"}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "80461",
        title: "Momos",
        description:
          "Enjoy steamed dumplings stuffed with the juicy flavours of meat or veggies.",
        imageId:
          "COLLECTIONS/IMAGES/MERCH/2024/7/3/3e239b9f-a69b-444a-942b-358b24bdbd1f_pic",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos,momos,layout_BAU_Contextual",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "338 restaurants",
        navBarConfig: {},
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 338,
        facetList: [
          {
            label: "10 Mins Delivery",
            id: "isRestaurantBolt",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "10 Mins Delivery",
                id: "isRestaurantBoltfacetquery0",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
            icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
            selectedIcon:
              "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Non Veg",
                id: "isVegfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pure Veg",
                id: "isVegfacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings",
                id: "ratingfacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than 30 mins",
                id: "deliveryTimefacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
          {
            label: "Cost For Two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery0",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rs.300 - Rs.600",
                id: "costForTwofacetquery1",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery2",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
            openFilter: true,
          },
        ],
        widgetId: "inlineFacetFilter",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            top: 12,
            right: 16,
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "338 Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "336296",
          name: "China Bowl",
          cloudinaryImageId: "5c4c0eac0cc84505452b8e7caf4c8300",
          locality: "Rohini",
          areaName: "Rohini",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese"],
          avgRating: 4.3,
          parentId: "3671",
          avgRatingString: "4.3",
          totalRatingsString: "1.7K+",
          promoted: true,
          adTrackingId:
            "cid=ff58ee2f-744d-4918-a25f-ebb711e78364~p=1~adgrpid=ff58ee2f-744d-4918-a25f-ebb711e78364#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=336296~plpr=COLLECTION~eid=a184aebc-c614-4047-a1e5-dee6c2a49f5c~srvts=1769017980032~collid=80461",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-21 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹109",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "ff58ee2f-744d-4918-a25f-ebb711e78364",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=336296&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "326440",
          name: "Punjabi Angithi (Vegorama Group)",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/6/fb48f8ab-1923-4648-9fe9-29df9a1d81ae_9b3000ac-742c-47c8-8119-3543e554cd3c.JPG",
          locality: "Paschim Vihar",
          areaName: "Paschim Vihar",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian", "Chinese", "Tandoor", "rolls"],
          avgRating: 4.4,
          veg: true,
          parentId: "465050",
          avgRatingString: "4.4",
          totalRatingsString: "50K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-21 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                description: "Delivery!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=326440&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1061429",
          name: "Apni Rasoi",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/6/23/716ce46e-3a16-49e0-9144-5e18761b50f2_2367f867-eb7c-4200-9ae3-f93623de0309.jpeg",
          locality: "Rohini",
          areaName: "Rohini",
          costForTwo: "₹300 for two",
          cuisines: ["Desserts", "Thalis", "Indian", "North Indian"],
          avgRating: 4.4,
          parentId: "64",
          avgRatingString: "4.4",
          totalRatingsString: "920",
          promoted: true,
          adTrackingId:
            "cid=a006d32d-0b04-45ba-9816-63fb4f36e5a4~p=2~adgrpid=a006d32d-0b04-45ba-9816-63fb4f36e5a4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1061429~plpr=COLLECTION~eid=d77ba57a-7edf-4d56-ab38-c11fd29c3676~srvts=1769017980032~collid=80461",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 1.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a006d32d-0b04-45ba-9816-63fb4f36e5a4",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1061429&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1057083",
          name: "Khadak Singh Da Dhaba",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/4/38536e56-47a1-4a2a-a0f8-6c8e5bf8917a_1057083.jpg",
          locality: "SARASWATI VIHAR",
          areaName: "NSP",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Mughlai", "Biryani"],
          avgRating: 4.1,
          parentId: "13170",
          avgRatingString: "4.1",
          totalRatingsString: "1.0K+",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-21 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PRFHeEFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1057083&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "606512",
          name: "Chinese Wok",
          cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
          locality: "Sector 11",
          areaName: "Rohini",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
          avgRating: 4.1,
          parentId: "61955",
          avgRatingString: "4.1",
          totalRatingsString: "2.3K+",
          promoted: true,
          adTrackingId:
            "cid=d9aaea37-d2f5-4f6f-92fa-d303e5c9bba6~p=4~adgrpid=d9aaea37-d2f5-4f6f-92fa-d303e5c9bba6#ag5~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=606512~plpr=COLLECTION~eid=8e7d3db2-7d9d-48ca-82ca-ac493561e7bd~srvts=1769017980032~collid=80461",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "d9aaea37-d2f5-4f6f-92fa-d303e5c9bba6",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=606512&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "710600",
          name: "Veer Ji Malai Chaap Wale",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/12/b6ee0de3-79d1-443b-8dba-454620d32c24_95a8de4a-115b-4683-9e59-ecf40bbd11cb.jpg",
          locality: "MANGOL PUR KHURD",
          areaName: "SEC 3, MANGOL PUR KHURD",
          costForTwo: "₹300 for two",
          cuisines: ["Chinese", "Indian", "Fast Food", "Snacks", "Biryani"],
          avgRating: 3.8,
          parentId: "12056",
          avgRatingString: "3.8",
          totalRatingsString: "449",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-21 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹1099",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=710600&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "567094",
          name: "Call Chotu - Your Everyday Food Genie",
          cloudinaryImageId: "icj7nuq8vheiripzz3em",
          locality: "Rajouri Garden",
          areaName: "Rajouri Garden",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "Street Food",
            "Momos",
            "Thai",
            "Kebabs",
            "Mughlai",
            "Maharashtrian",
          ],
          avgRating: 4.1,
          parentId: "471234",
          avgRatingString: "4.1",
          totalRatingsString: "4.3K+",
          promoted: true,
          adTrackingId:
            "cid=2f8487d2-079a-4521-80e6-694c132ff84d~p=5~adgrpid=2f8487d2-079a-4521-80e6-694c132ff84d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=567094~plpr=COLLECTION~eid=960a08a8-c5fa-4ac0-8d40-9423dd0b6ac2~srvts=1769017980032~collid=80461",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "8.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 04:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "2.2",
              ratingCount: "37",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "2f8487d2-079a-4521-80e6-694c132ff84d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=567094&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "21101",
          name: "The Great Punjabi Dhaba and Caterers",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/12/16/5a4ef836-7843-434b-8a7e-d87c699fc2d0_df6e22ad-7f86-4186-980f-c1a433949b88.jpg",
          locality: "Rohini",
          areaName: "Rohini",
          costForTwo: "₹300 for two",
          cuisines: [
            "Mughlai",
            "North Indian",
            "Chinese",
            "Biryani",
            "Kebabs",
            "Snacks",
            "American",
          ],
          avgRating: 4,
          parentId: "701939",
          avgRatingString: "4.0",
          totalRatingsString: "52K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "158",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=21101&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "347493",
          name: "Hudson Chopsticks - Fresh Chinese",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/8/0508913c-ac40-4560-a524-c1ea1ad45766_7d349ca4-4b41-46c9-b6da-442671289af6.jpg",
          locality: "Bhagwan Mahavir Marg",
          areaName: "Prashant Vihar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Chinese",
            "Thai",
            "Asian",
            "Snacks",
            "Tibetan",
            "Nepalese",
            "Pan-Asian",
            "Seafood",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "562449",
          avgRatingString: "4.3",
          totalRatingsString: "6.8K+",
          promoted: true,
          adTrackingId:
            "cid=c5e71234-6e6b-4046-82e3-bf89e676b2e2~p=7~adgrpid=c5e71234-6e6b-4046-82e3-bf89e676b2e2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=347493~plpr=COLLECTION~eid=70c0e087-c288-46a8-8fdc-1dde1ab0bbd6~srvts=1769017980032~collid=80461",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
            secondaryDiscountCallout: "₹30 Cashback",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "c5e71234-6e6b-4046-82e3-bf89e676b2e2",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=347493&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "857695",
          name: "The Yellow Bowl",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/24/3ed4a66b-b86d-4f2f-8263-4571938374ba_053d4180-c32c-421b-b927-27505ca41981.jpg",
          locality: "Maharaja Agrasen Marg",
          areaName: "Rohini",
          costForTwo: "₹350 for two",
          cuisines: ["Chinese", "Momos", "Tandoori"],
          avgRating: 4.3,
          veg: true,
          parentId: "15736",
          avgRatingString: "4.3",
          totalRatingsString: "1.7K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-22 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Chinese.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Chinese.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹449",
            headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
            secondaryDiscountCallout: "₹30 Cashback",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=857695&source=collection&query=Momos",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(heading);
