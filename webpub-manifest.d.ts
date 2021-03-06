/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ReadiumWebPublicationManifest = {
  "@context"?: string[];
  metadata: Metadata;
  links: Link[];
  readingOrder: Link[];
  resources?: Link[];
  toc?: Link[];
  [k: string]: any | CoreCollectionModel;
} & EPUBExtensionSubCollections & {
    readingOrder?: {
      [k: string]: any;
    }[];
    [k: string]: any;
  } & {
    resources?: {
      [k: string]: any;
    }[];
    [k: string]: any;
  };
export type Metadata = EPUBExtensionMetadata & PresentationHintsMetadata;
export type CoreCollectionModel =
  | {
      metadata: {
        [k: string]: any;
      };
      links: Link[];
      [k: string]: any;
    }
  | (
      | Link
      | {
          metadata: {
            [k: string]: any;
          };
          links: Link[];
          [k: string]: any;
        })[];

export interface EPUBExtensionMetadata {
  presentation?: {
    /**
     * Hints how the layout of the resource should be presented
     */
    layout?: "fixed" | "reflowable";
    [k: string]: any;
  };
  [k: string]: any;
}
export interface PresentationHintsMetadata {
  presentation?: {
    /**
     * Indicates how the progression between resources from the readingOrder should be handled.
     */
    continuous?: boolean;
    /**
     * Suggested method for constraining a resource inside the viewport.
     */
    fit?: "width" | "height" | "contain" | "cover";
    /**
     * Suggested orientation for the device when displaying the linked resource
     */
    orientation?: "auto" | "landscape" | "portrait";
    /**
     * Suggested method for handling overflow while displaying the linked resource
     */
    overflow?: "auto" | "paginated" | "scrolled" | "scrolled-continuous";
    /**
     * Indicates the condition to be met for the linked resource to be rendered within a synthetic spread
     */
    spread?: "auto" | "both" | "none" | "landscape";
    [k: string]: any;
  };
  [k: string]: any;
}
export interface Link {
  /**
   * URI or URI template of the linked resource
   */
  href: string;
  /**
   * MIME type of the linked resource
   */
  type?: string;
  /**
   * Indicates that a URI template is used in href
   */
  templated?: boolean;
  /**
   * Title of the linked resource
   */
  title?: string;
  /**
   * Relation between the linked resource and its containing collection
   */
  rel?: string[];
  /**
   * Properties associated to the linked resource
   */
  properties?: OPDSLinkProperties & EPUBExtensionLinkProperties & PresentationHintsLinkProperties;
  /**
   * Height of the linked resource in pixels
   */
  height?: number;
  /**
   * Width of the linked resource in pixels
   */
  width?: number;
  /**
   * Bitrate of the linked resource in kbps
   */
  bitrate?: number;
  /**
   * Length of the linked resource in seconds
   */
  duration?: number;
  /**
   * Expected language of the linked resource
   */
  language?: string[];
  /**
   * Alternate resources for the linked resource
   */
  alternate?: Link[];
  /**
   * Resources that are children of the linked resource, in the context of a given collection role
   */
  children?: Link[];
  [k: string]: any;
}
export interface OPDSLinkProperties {
  /**
   * Provide a hint about the expected number of items returned
   */
  numberOfItems?: number;
  /**
   * The price of a publication is tied to its acquisition link
   */
  price?: {
    value: number;
    currency:
      | "AED"
      | "AFN"
      | "ALL"
      | "AMD"
      | "ANG"
      | "AOA"
      | "ARS"
      | "AUD"
      | "AWG"
      | "AZN"
      | "BAM"
      | "BBD"
      | "BDT"
      | "BGN"
      | "BHD"
      | "BIF"
      | "BMD"
      | "BND"
      | "BOB"
      | "BOV"
      | "BRL"
      | "BSD"
      | "BTN"
      | "BWP"
      | "BYN"
      | "BZD"
      | "CAD"
      | "CDF"
      | "CHE"
      | "CHF"
      | "CHW"
      | "CLF"
      | "CLP"
      | "CNY"
      | "COP"
      | "COU"
      | "CRC"
      | "CUC"
      | "CUP"
      | "CVE"
      | "CZK"
      | "DJF"
      | "DKK"
      | "DOP"
      | "DZD"
      | "EGP"
      | "ERN"
      | "ETB"
      | "EUR"
      | "FJD"
      | "FKP"
      | "GBP"
      | "GEL"
      | "GHS"
      | "GIP"
      | "GMD"
      | "GNF"
      | "GTQ"
      | "GYD"
      | "HKD"
      | "HNL"
      | "HRK"
      | "HTG"
      | "HUF"
      | "IDR"
      | "ILS"
      | "INR"
      | "IQD"
      | "IRR"
      | "ISK"
      | "JMD"
      | "JOD"
      | "JPY"
      | "KES"
      | "KGS"
      | "KHR"
      | "KMF"
      | "KPW"
      | "KRW"
      | "KWD"
      | "KYD"
      | "KZT"
      | "LAK"
      | "LBP"
      | "LKR"
      | "LRD"
      | "LSL"
      | "LYD"
      | "MAD"
      | "MDL"
      | "MGA"
      | "MKD"
      | "MMK"
      | "MNT"
      | "MOP"
      | "MRU"
      | "MUR"
      | "MVR"
      | "MWK"
      | "MXN"
      | "MXV"
      | "MYR"
      | "MZN"
      | "NAD"
      | "NGN"
      | "NIO"
      | "NOK"
      | "NPR"
      | "NZD"
      | "OMR"
      | "PAB"
      | "PEN"
      | "PGK"
      | "PHP"
      | "PKR"
      | "PLN"
      | "PYG"
      | "QAR"
      | "RON"
      | "RSD"
      | "RUB"
      | "RWF"
      | "SAR"
      | "SBD"
      | "SCR"
      | "SDG"
      | "SEK"
      | "SGD"
      | "SHP"
      | "SLL"
      | "SOS"
      | "SRD"
      | "SSP"
      | "STN"
      | "SVC"
      | "SYP"
      | "SZL"
      | "THB"
      | "TJS"
      | "TMT"
      | "TND"
      | "TOP"
      | "TRY"
      | "TTD"
      | "TWD"
      | "TZS"
      | "UAH"
      | "UGX"
      | "USD"
      | "USN"
      | "UYI"
      | "UYU"
      | "UZS"
      | "VEF"
      | "VES"
      | "VND"
      | "VUV"
      | "WST"
      | "XAF"
      | "XAG"
      | "XAU"
      | "XBA"
      | "XBB"
      | "XBC"
      | "XBD"
      | "XCD"
      | "XDR"
      | "XOF"
      | "XPD"
      | "XPF"
      | "XPT"
      | "XSU"
      | "XTS"
      | "XUA"
      | "XXX"
      | "YER"
      | "ZAR"
      | "ZMW"
      | "ZWL";
    [k: string]: any;
  };
  /**
   * Indirect acquisition provides a hint for the expected media type that will be acquired after additional steps
   */
  indirectAcquisition?: OPDSAcquisitionObject[];
  /**
   * Library-specific features when a specific book is unavailable but provides a hold list
   */
  holds?: {
    total?: number;
    position?: number;
    [k: string]: any;
  };
  /**
   * Library-specific feature that contains information about the copies that a library has acquired
   */
  copies?: {
    total?: number;
    available?: number;
    [k: string]: any;
  };
  /**
   * Indicated the availability of a given resource
   */
  availability?: {
    state: "available" | "unavailable" | "reserved" | "ready";
    /**
     * Timestamp for the previous state change
     */
    since?:
      | {
          [k: string]: any;
        }
      | {
          [k: string]: any;
        };
    /**
     * Timestamp for the next state change
     */
    until?:
      | {
          [k: string]: any;
        }
      | {
          [k: string]: any;
        };
    [k: string]: any;
  };
  [k: string]: any;
}
export interface OPDSAcquisitionObject {
  type: string;
  child?: OPDSAcquisitionObject[];
  [k: string]: any;
}
export interface EPUBExtensionLinkProperties {
  /**
   * Identifies content contained in the linked resource, that cannot be strictly identified using a media type.
   */
  contains?: ("mathml" | "onix" | "remote-resources" | "js" | "svg" | "xmp")[];
  /**
   * Hints how the layout of the resource should be presented
   */
  layout?: "fixed" | "reflowable";
  /**
   * Location of a media-overlay for the resource referenced in the Link Object
   */
  "media-overlay"?: string;
  /**
   * Indicates that a resource is encrypted/obfuscated and provides relevant information for decryption
   */
  encrypted?: {
    /**
     * Identifies the algorithm used to encrypt the resource
     */
    algorithm: string;
    /**
     * Compression method used on the resource
     */
    compression?: string;
    /**
     * Original length of the resource in bytes before compression and/or encryption
     */
    "original-length"?: number;
    /**
     * Identifies the encryption profile used to encrypt the resource
     */
    profile?: string;
    /**
     * Identifies the encryption scheme used to encrypt the resource
     */
    scheme?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
export interface PresentationHintsLinkProperties {
  /**
   * Suggested method for constraining a resource inside the viewport.
   */
  fit?: "width" | "height" | "contain" | "cover";
  /**
   * Suggested orientation for the device when displaying the linked resource
   */
  orientation?: "auto" | "landscape" | "portrait";
  /**
   * Suggested method for handling overflow while displaying the linked resource
   */
  overflow?: "auto" | "paginated" | "scrolled" | "scrolled-continuous";
  /**
   * Indicates how the linked resource should be displayed in a reading environment that displays synthetic spreads
   */
  page?: "left" | "right" | "center";
  /**
   * Indicates the condition to be met for the linked resource to be rendered within a synthetic spread
   */
  spread?: "auto" | "both" | "none" | "landscape";
  [k: string]: any;
}
export interface EPUBExtensionSubCollections {
  "page-list"?: Link[];
  landmarks?: Link[];
  loa?: Link[];
  loi?: Link[];
  lot?: Link[];
  lov?: Link[];
  [k: string]: any;
}
