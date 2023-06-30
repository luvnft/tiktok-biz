/*
 * Copyright 2023 TikTok Pte. Ltd.
 *
 * This source code is licensed under the MIT license found in
 * the LICENSE file in the root directory of this source tree.
 */
import {ApiClient} from '../ApiClient';

/**
 * The AdAcoBodyCommonMaterialTrackingInfo model module.
 * @module model/AdAcoBodyCommonMaterialTrackingInfo
 * @version 0.1.1
 */
export class AdAcoBodyCommonMaterialTrackingInfo {
  /**
   * Constructs a new <code>AdAcoBodyCommonMaterialTrackingInfo</code>.
   * Tracking information.
   * @alias module:model/AdAcoBodyCommonMaterialTrackingInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdAcoBodyCommonMaterialTrackingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdAcoBodyCommonMaterialTrackingInfo} obj Optional instance to populate.
   * @return {module:model/AdAcoBodyCommonMaterialTrackingInfo} The populated <code>AdAcoBodyCommonMaterialTrackingInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdAcoBodyCommonMaterialTrackingInfo();
      if (data.hasOwnProperty('click_tracking_urls'))
        obj.click_tracking_urls = ApiClient.convertToType(data['click_tracking_urls'], ['String']);
      if (data.hasOwnProperty('impression_tracking_urls'))
        obj.impression_tracking_urls = ApiClient.convertToType(data['impression_tracking_urls'], ['String']);
      if (data.hasOwnProperty('tracking_app_id'))
        obj.tracking_app_id = ApiClient.convertToType(data['tracking_app_id'], 'String');
      if (data.hasOwnProperty('tracking_offline_event_set_ids'))
        obj.tracking_offline_event_set_ids = ApiClient.convertToType(data['tracking_offline_event_set_ids'], ['String']);
      if (data.hasOwnProperty('tracking_pixel_id'))
        obj.tracking_pixel_id = ApiClient.convertToType(data['tracking_pixel_id'], 'String');
      if (data.hasOwnProperty('vast_moat_enabled'))
        obj.vast_moat_enabled = ApiClient.convertToType(data['vast_moat_enabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Click Tracking URL. URL generated by your data partner to track click events in your ads. Generally you can find and copy the URL from their platform. <ul><li> If the partner ID for the App (`app_id` specified at the ad group level ) that you want to track is `44` (TikTok Business SDK) or `49` (TikTok App API), you don't need to pass in this field. If you do, this field will be ignored. You can obtain the partner ID of an App through `partner_id` returned from [/app/list/](https://ads.tiktok.com/marketing_api/docs?id=1740859313270786) or [/app/info/](https://ads.tiktok.com/marketing_api/docs?id=1740859272887297).</li><li> If self-attribution has been enabled for the App (`app_id` specified at the ad group level ) that you want to track and the partner ID for the App is not `44` (TikTok Business SDK) or `49` (TikTok App API), you don't need to pass in this field because this field will default to the Click Tracking URL you have configured for the App, and updates to the URL are not supported
 * @member {Array.<String>} click_tracking_urls
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.click_tracking_urls = undefined;

/**
 * Default Impression Tracking URL. URL generated by your data partner to track impression events in your ads. Generally you can find and copy the URL from their platform. <ul><li> If the partner ID for the App (`app_id` specified at the ad group level ) that you want to track is `44` (TikTok Business SDK) or `49` (TikTok App API), you don't need to pass in this field. If you do, this field will be ignored. You can obtain the partner ID of an App through `partner_id` returned from [/app/list/](https://ads.tiktok.com/marketing_api/docs?id=1740859313270786) or [/app/info/](https://ads.tiktok.com/marketing_api/docs?id=1740859272887297)
 * @member {Array.<String>} impression_tracking_urls
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.impression_tracking_urls = undefined;

/**
 * The ID of the application that you want to track. You can use this field to track offsite app events. <br>This field supports the campaign objectives for both Auction ads (`REACH`, `VIDEO_VIEWS`, `TRAFFIC`, `WEB_CONVERSIONS`, `LEAD_GENERATION`, `APP_PROMOTION`, `PRODUCT_SALES`, `ENGAGEMENT`) and Reach & Frequency ads (`RF_REACH`).<br>If `app_id` is specified at the ad group level and you want to track offsite app events, then the application ID you pass via this field must be the same ID that you specified at the ad group level. Otherwise, you can pass in any application ID that you'd like to track via this field.<br>You can get application ID (`app_id`) via [/app/list/](https://ads.tiktok.com/marketing_api/docs?id=1740859313270786).
 * @member {String} tracking_app_id
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.tracking_app_id = undefined;

/**
 * A list of Offline Event set IDs that you want to track. You can use this field to track and measure offline activity from people that see or interact with your ads.
 * @member {Array.<String>} tracking_offline_event_set_ids
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.tracking_offline_event_set_ids = undefined;

/**
 * The pixel ID that you'd like to track. You can use this field to track offsite events. It supports the campaign objectives for both Auction ads (`REACH`, `VIDEO_VIEWS`, `TRAFFIC`, `WEB_CONVERSIONS`, `LEAD_GENERATION`, `APP_PROMOTION`, `PRODUCT_SALES`, `ENGAGEMENT`) and Reach & Frequency ads.
 * @member {String} tracking_pixel_id
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.tracking_pixel_id = undefined;

/**
 * @member {Boolean} vast_moat_enabled
 */
AdAcoBodyCommonMaterialTrackingInfo.prototype.vast_moat_enabled = undefined;

