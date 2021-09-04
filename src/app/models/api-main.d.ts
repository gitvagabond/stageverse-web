





/// <reference path="api-main.enums.ts" />

 


declare module StageMe.Common.Web.Models.Requests.Asset {
	interface AssetMetaById {
		metaId: string;
	}
	interface AssetTagById {
		tagId: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Bitly {
	interface BitlyByBcode {
		bcode: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Catalogue {
	interface CatalogueVersion {
		version: StageMe.Common.Web.Models.Values.eCatalogueVersion;
	}
	interface PagedCatalogueVersion extends StageMe.Common.Web.Models.Requests.Catalogue.CatalogueVersion {
		pgNo: number;
	}
	interface SeasonsByShow extends StageMe.Common.Web.Models.Requests.Catalogue.PagedCatalogueVersion {
		showBCode: string;
	}
	interface SpotsBySeason extends StageMe.Common.Web.Models.Requests.Catalogue.PagedCatalogueVersion {
		seasonBCode: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Challenge {
	interface ChallengeSolution {
		challengeId: string;
		solution: number[];
	}
}
declare module StageMe.Common.Web.Models.Requests.Dummy {
	interface Dummy {
	}
}
declare module StageMe.Common.Web.Models.Requests.Image {
	interface EntityImageCreate extends StageMe.Common.Web.Models.Requests.Image.EntityImageRemove {
		provider: StageMe.Common.Web.Models.Values.eAssetProvider;
		reference: string;
	}
	interface EntityImageRemove {
		entityId: string;
		entityType: StageMe.Common.Web.Models.Values.eEntityImageType;
		imageUsageType: StageMe.Common.Web.Models.Values.eEntityImageUsageType;
	}
}
declare module StageMe.Common.Web.Models.Requests.InternalDebug {
	interface BySFKey {
		ky: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Listing {
	interface PagingRequest {
		fromLinePos: number;
		noOfLines: number;
	}
	interface SuperfastPagingRequest {
		pageNo: number;
	}
}
declare module StageMe.Common.Web.Models.Requests.Member {
    interface MemberAppTicket {
        referrerBCode: string;
    }
    interface MemberDeviceInfo {
        deviceId: string;
        deviceOS: StageMe.Common.Web.Models.Values.eDeviceOs;
        pushToken: string;
    }
    interface ProfileUpdateDob {
        birthday: string;
    }
    interface ProfileUpdateName {
        firstName: string;
        lastName: string;
    }
    interface SetPreference {
        items: StageMe.Common.Web.Models.Requests.User.UserCustomPreference[];
    }
    interface Toggle {
        on: boolean;
    }
    interface UpdateNotification extends StageMe.Common.Web.Models.Requests.Member.Toggle {
        notification: string;
    }
    interface WallPostSeen {
        seenWallPostId: string;
    }
}
declare module StageMe.Common.Web.Models.Requests.Meta {
	interface AssetMetaCreate extends StageMe.Common.Web.Models.Requests.Meta.MetaCreateBase {
		assetId: string;
	}
	interface AssetMetaUpdate extends StageMe.Common.Web.Models.Requests.Meta.AssetMetaCreate {
		metaId: string;
	}
	interface MetaCreateBase {
		propName: string;
		propValue: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Season {
	interface SeasonById {
		seasonId: string;
	}
	interface SeasonBySlug {
		seasonSlug: string;
		showSlug: string;
	}
	interface SeasonCreate {
		posterBackgroundColor: string;
		scheduledReleaseTimestamp: Date;
		showId: string;
		slug: string;
		synopsis: string;
		title: string;
	}
	interface SeasonGetSpots extends StageMe.Common.Web.Models.Requests.Listing.PagingRequest {
		seasonId: string;
	}
	interface SeasonTagById {
		tagId: string;
	}
	interface SeasonUpdate extends StageMe.Common.Web.Models.Requests.Season.SeasonCreate {
		seasonId: string;
	}
	interface SeasonUpdateVideo {
		posterAssetId: string;
		seasonId: string;
		trailerAssetId: string;
	}
	interface SuperfastSeasonGetSpots extends StageMe.Common.Web.Models.Requests.Listing.SuperfastPagingRequest {
		seasonBCode: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Show {
	interface ShowById {
		showId: string;
	}
	interface ShowBySlug {
		slug: string;
	}
	interface ShowCreate {
		isMultiSeason: boolean;
		slug: string;
		synopsis: string;
		title: string;
	}
	interface ShowGetSeasons extends StageMe.Common.Web.Models.Requests.Listing.PagingRequest {
		showId: string;
	}
	interface ShowUpdate extends StageMe.Common.Web.Models.Requests.Show.ShowCreate {
		showId: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Spot {
	interface SpotById {
		spotId: string;
	}
	interface SpotCreate {
		description: string;
		seasonId: string;
		title: string;
	}
	interface SpotGetSpots extends StageMe.Common.Web.Models.Requests.Listing.PagingRequest {
		spotId: string;
	}
	interface SpotHot extends StageMe.Common.Web.Models.Requests.Bitly.BitlyByBcode {
		time: number;
		x: number;
		y: number;
	}
	interface SpotTagById {
		tagId: string;
	}
	interface SpotUpdate extends StageMe.Common.Web.Models.Requests.Spot.SpotCreate {
		spotId: string;
	}
	interface SpotUpdateFeature {
		featureAssetIds: string[];
		spotId: string;
	}
	interface SpotUpdateTrailer {
		spotId: string;
		trailerAssetId: string;
	}
	interface SuperfastSpotGetSpots extends StageMe.Common.Web.Models.Requests.Listing.SuperfastPagingRequest {
		spotBCode: string;
	}
}
declare module StageMe.Common.Web.Models.Requests.Tag {
	interface AssetTagCreate extends StageMe.Common.Web.Models.Requests.Tag.TagCreateBase {
		assetId: string;
	}
	interface AssetTagUpdate extends StageMe.Common.Web.Models.Requests.Tag.AssetTagCreate {
		tagId: string;
	}
	interface SeasonTagCreate extends StageMe.Common.Web.Models.Requests.Tag.TagCreateBase {
		seasonId: string;
	}
	interface SeasonTagUpdate extends StageMe.Common.Web.Models.Requests.Tag.SeasonTagCreate {
		tagId: string;
	}
	interface SpotTagCreate extends StageMe.Common.Web.Models.Requests.Tag.TagCreateBase {
		spotId: string;
	}
	interface SpotTagUpdate extends StageMe.Common.Web.Models.Requests.Tag.SpotTagCreate {
		tagId: string;
	}
	interface TagCreateBase {
		action: StageMe.Common.Web.Models.Values.eTagAction;
		actionReference: string;
		colorHex: string;
		isVisible: boolean;
		timecode: StageMe.Common.Web.Models.Views.Tag.TagTime[];
		title: string;
		uiType: StageMe.Common.Web.Models.Values.eTagUIType;
	}
}
declare module StageMe.Common.Web.Models.Requests.User {
	interface UserCustomPreference {
		name: string;
		value: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Activity {
	interface ActivityStreamItem {
		activityId: string;
		activityStreamItemId: string;
		activityVerb: StageMe.Common.Web.Models.Values.eActivityVerb;
		createdTimestamp: Date;
		entityId: string;
		info: StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemInfo;
		recipientRole: StageMe.Common.Web.Models.Values.eActivityRecipientRole;
		templates: System.Collections.Generic.KeyValuePair<string, string>[];
		wallType: StageMe.Common.Web.Models.Values.eActivityWallType;
	}
	interface ActivityStreamItemEntity {
		entityType: StageMe.Common.Web.Models.Values.eEntityType;
	}
	interface ActivityStreamItemInfo {
		activityId: string;
		createdTimestamp: Date;
		streamActor: StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity;
		streamObject: StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity;
		streamTarget: StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity;
		verb: StageMe.Common.Web.Models.Values.eActivityVerb;
	}
	interface ActivityStreamItemSeason extends StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity {
		entity: StageMe.Common.Web.Models.Views.Season.SeasonModule;
	}
	interface ActivityStreamItemShow extends StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity {
		entity: StageMe.Common.Web.Models.Views.Show.ShowModule;
	}
	interface ActivityStreamItemSpot extends StageMe.Common.Web.Models.Views.Activity.ActivityStreamItemEntity {
		entity: StageMe.Common.Web.Models.Views.Spot.SpotModule;
	}
	interface ActivityUnseen {
		hasUnseenActivity: boolean;
		newestWallPostId: string;
		seenWallPostId: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Asset {
	interface Asset {
		assetId: string;
		creatorUserId: string;
		duration: number;
		mediaMetas: StageMe.Common.Web.Models.Views.Meta.Meta[];
		mediaTags: StageMe.Common.Web.Models.Views.Tag.Tag[];
		provider: StageMe.Common.Web.Models.Values.eAssetProvider;
		reference: string;
		status: StageMe.Common.Web.Models.Values.eAssetStatus;
		thumbnailUrls: System.Collections.Generic.KeyValuePair<string, string>[];
		title: string;
		transcodeUrls: System.Collections.Generic.KeyValuePair<string, string>[];
		type: StageMe.Common.Web.Models.Values.eAssetType;
		usage: StageMe.Common.Web.Models.Values.eAssetUsage;
	}
	interface EntityAssetsBase {
		trailer: StageMe.Common.Web.Models.Views.Asset.TrailerAsset;
	}
	interface FeatureAsset extends StageMe.Common.Web.Models.Views.Asset.Asset {
		featureAssetType: StageMe.Common.Web.Models.Values.eFeatureAssetType;
	}
	interface SpotAssets extends StageMe.Common.Web.Models.Views.Asset.EntityAssetsBase {
		featureAssets: StageMe.Common.Web.Models.Views.Asset.FeatureAsset[];
	}
	interface TrailerAsset extends StageMe.Common.Web.Models.Views.Asset.Asset {
		interactionReference: string;
		interactionText: string;
		interactionType: StageMe.Common.Web.Models.Values.eTrailerInteractionType;
	}
}
declare module StageMe.Common.Web.Models.Views.Captcha {
	interface CaptchaAsset {
		captchaAssetId: string;
		keyword: string;
		s3BucketName: string;
		s3ObjectKey: string;
		signedUrl: string;
	}
	interface Challenge {
		challengeId: string;
		images: StageMe.Common.Web.Models.Views.Captcha.ChallengeImage[];
		keyword: string;
	}
	interface ChallengeImage {
		id: number;
		url: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Contentful {
	interface Area {
		id: string;
		sections: any[];
	}
	interface Catalogue {
		areas: StageMe.Common.Web.Models.Views.Contentful.Area[];
	}
	interface Section<T> {
		displayTitle: string;
		entities: T[];
		entityType: StageMe.Common.Web.Models.Values.eEntityType;
		isScrollable: boolean;
	}
}
declare module StageMe.Common.Web.Models.Views.Member {
	interface MemberAccountEmail {
		email: string;
		isVerified: boolean;
	}
	interface MemberAccountInfo {
		hasPassword: boolean;
	}
	interface MemberAccountMobileNumber {
		isVerified: boolean;
		mobileNumber: string;
	}
	interface MemberConnectionFacebook {
		email: string;
		userId: string;
	}
	interface MemberCustomPreference {
		name: string;
		value: string;
	}
	interface MemberCustomPreferences {
		items: StageMe.Common.Web.Models.Views.Member.MemberCustomPreference[];
	}
	interface MemberNotificationSettingsSimple {
		emails: boolean;
		sounds: boolean;
	}
	interface MemberProfile {
		birthday: string;
		firstName: string;
		images: StageMe.Common.Web.Models.Views.Urls.MemberImageUrls;
		isCast: boolean;
		isStaff: boolean;
		lastName: string;
		promoterType: StageMe.Common.Web.Models.Values.ePromoterType;
		urls: StageMe.Common.Web.Models.Views.Urls.EntityUrls;
		username: string;
	}
	interface MemberPurchaseStreetAddress {
		address_1: string;
		address_2: string;
		city: string;
		company: string;
		country: string;
		county: string;
		firstName: string;
		instructions: string;
		isBillingAddress: boolean;
		isDefault: boolean;
		isShippingAddress: boolean;
		lastName: string;
		phone: string;
		postcode: string;
	}
	interface MemberPurchaseStreetAddresses {
		items: StageMe.Common.Web.Models.Views.Member.MemberPurchaseStreetAddress[];
		stageId: string;
	}
	interface MemberSimple {
		accountEmail: StageMe.Common.Web.Models.Views.Member.MemberAccountEmail;
		accountInfo: StageMe.Common.Web.Models.Views.Member.MemberAccountInfo;
		accountMobileNumber: StageMe.Common.Web.Models.Views.Member.MemberAccountMobileNumber;
		bcode: string;
		isOnWaitingList: boolean;
		notificationSettings: StageMe.Common.Web.Models.Views.Member.MemberNotificationSettingsSimple;
		preferences: StageMe.Common.Web.Models.Views.Member.MemberCustomPreferences;
		profile: StageMe.Common.Web.Models.Views.Member.MemberProfile;
		userId: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Meta {
	interface AssetMetaModule extends StageMe.Common.Web.Models.Views.Meta.Meta {
		assetId: string;
	}
	interface Meta {
		metaId: string;
		propName: string;
		propValue: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Moltin {
	interface MoltinField<T> {
		value: T;
	}
	interface MoltinProduct {
		description: string;
		id: string;
		price: StageMe.Common.Web.Models.Views.Moltin.MoltinField<string>;
		sku: string;
		status: StageMe.Common.Web.Models.Views.Moltin.MoltinField<string>;
		stock_level: number;
		stock_status: StageMe.Common.Web.Models.Views.Moltin.MoltinField<string>;
		title: string;
	}
}
declare module StageMe.Common.Web.Models.Views.Season {
	interface Season extends StageMe.Common.Web.Models.Views.Season.SeasonCore {
		stats: StageMe.Common.Web.Models.Views.Season.SeasonStats;
	}
	interface SeasonCore {
		info: StageMe.Common.Web.Models.Views.Season.SeasonInfo;
		seasonId: string;
		showRelation: StageMe.Common.Web.Models.Views.Season.SeasonShowRelation;
		status: StageMe.Common.Web.Models.Views.Season.SeasonStatus;
	}
	interface SeasonInfo {
		bcode: string;
		images: StageMe.Common.Web.Models.Views.Urls.SeasonImageUrls;
		number: number;
		seasonType: StageMe.Common.Web.Models.Values.eSeasonType;
		slug: string;
		synopsis: string;
		title: string;
		urls: StageMe.Common.Web.Models.Views.Urls.EntityUrls;
	}
	interface SeasonModule extends StageMe.Common.Web.Models.Views.Season.Season {
		viewer: StageMe.Common.Web.Models.Views.Viewer.SeasonViewer;
	}
	interface SeasonShowRelation {
		showId: string;
		slug: string;
	}
	interface SeasonStats {
		spots: number;
	}
	interface SeasonStatus {
		createdTimestamp: Date;
		releasedTimestamp: Date;
		scheduledReleaseTimestamp: Date;
		status: StageMe.Common.Web.Models.Values.eSeasonStatus;
	}
	interface SeasonWithSpotModule {
		season: StageMe.Common.Web.Models.Views.Season.SeasonModule;
		spot: StageMe.Common.Web.Models.Views.Spot.SpotModule;
	}
}
declare module StageMe.Common.Web.Models.Views.Show {
	interface Show extends StageMe.Common.Web.Models.Views.Show.ShowCore {
		stats: StageMe.Common.Web.Models.Views.Show.ShowStats;
	}
	interface ShowCore {
		info: StageMe.Common.Web.Models.Views.Show.ShowInfo;
		showId: string;
	}
	interface ShowInfo {
		bcode: string;
		images: StageMe.Common.Web.Models.Views.Urls.ShowImageUrls;
		isMultiSeason: boolean;
		slug: string;
		synopsis: string;
		title: string;
		urls: StageMe.Common.Web.Models.Views.Urls.EntityUrls;
	}
	interface ShowModule extends StageMe.Common.Web.Models.Views.Show.Show {
	}
	interface ShowStats {
		seasons: number;
		spots: number;
	}
}
declare module StageMe.Common.Web.Models.Views.Spot {
	interface RelatedSpotModule extends StageMe.Common.Web.Models.Views.Spot.SpotModule {
		parentSpotId: string;
	}
	interface Spot extends StageMe.Common.Web.Models.Views.Spot.SpotCore {
		stats: StageMe.Common.Web.Models.Views.Spot.SpotStats;
	}
	interface SpotConfig {
		hotometer: StageMe.Common.Web.Models.Views.Spot.SpotHotometerConfig;
		player: StageMe.Common.Web.Models.Views.Spot.SpotPlayerConfig;
	}
	interface SpotCore {
		config: StageMe.Common.Web.Models.Views.Spot.SpotConfig;
		info: StageMe.Common.Web.Models.Views.Spot.SpotInfo;
		seasonRelation: StageMe.Common.Web.Models.Views.Spot.SpotSeasonRelation;
		spotId: string;
		status: StageMe.Common.Web.Models.Views.Spot.SpotStatus;
	}
	interface SpotHotometer {
		slice: StageMe.Common.Web.Models.Views.Spot.SpotHotometerSlice;
	}
	interface SpotHotometerConfig {
		enabled: boolean;
	}
	interface SpotHotometerSegment {
		h: number;
		t: number;
	}
	interface SpotHotometerSlice {
		segments: StageMe.Common.Web.Models.Views.Spot.SpotHotometerSegment[];
		slice: StageMe.Common.Web.Models.Values.eHotometerSlice;
	}
	interface SpotInfo {
		assets: StageMe.Common.Web.Models.Views.Asset.SpotAssets;
		bcode: string;
		description: string;
		images: StageMe.Common.Web.Models.Views.Urls.SpotImageUrls;
		number: number;
		parentSpotId: string;
		title: string;
		type: StageMe.Common.Web.Models.Values.eSpotType;
		urls: StageMe.Common.Web.Models.Views.Urls.EntityUrls;
	}
	interface SpotModule extends StageMe.Common.Web.Models.Views.Spot.Spot {
		viewer: StageMe.Common.Web.Models.Views.Viewer.SpotViewer;
	}
	interface SpotPlayerConfig {
		controls: boolean;
		loop: boolean;
	}
	interface SpotSeasonRelation {
		bcode: string;
		seasonId: string;
	}
	interface SpotStats {
		spots: number;
	}
	interface SpotStatus {
		createdTimestamp: Date;
		status: StageMe.Common.Web.Models.Values.eSpotStatus;
	}
}
declare module StageMe.Common.Web.Models.Views.Tag {
	interface AssetTagModule extends StageMe.Common.Web.Models.Views.Tag.Tag {
		assetId: string;
	}
	interface SeasonTagModule extends StageMe.Common.Web.Models.Views.Tag.Tag {
		seasonId: string;
	}
	interface SpotTagModule extends StageMe.Common.Web.Models.Views.Tag.Tag {
		spotId: string;
	}
	interface Tag {
		action: StageMe.Common.Web.Models.Values.eTagAction;
		actionReference: string;
		colorHex: string;
		isVisible: boolean;
		tagId: string;
		timecode: StageMe.Common.Web.Models.Views.Tag.TagTime[];
		title: string;
		uiType: StageMe.Common.Web.Models.Values.eTagUIType;
	}
	interface TagTime {
		h: number;
		t: number;
		w: number;
		x: number;
		y: number;
	}
}
declare module StageMe.Common.Web.Models.Views.Urls {
	interface EntityUrls {
		api: System.Collections.Generic.KeyValuePair<string, string>[];
		web: System.Collections.Generic.KeyValuePair<string, string>[];
	}
	interface MemberImageUrls {
		avatar: System.Collections.Generic.KeyValuePair<string, string>[];
		avatarIsCustom: boolean;
	}
	interface ProductImageUrls {
		art: System.Collections.Generic.KeyValuePair<string, string>[];
		logo: System.Collections.Generic.KeyValuePair<string, string>[];
		poster: System.Collections.Generic.KeyValuePair<string, string>[];
	}
	interface SeasonImageUrls {
		art: System.Collections.Generic.KeyValuePair<string, string>[];
		logo: System.Collections.Generic.KeyValuePair<string, string>[];
		poster: System.Collections.Generic.KeyValuePair<string, string>[];
		posterBackgroundColor: string;
	}
	interface ShowImageUrls {
		art: System.Collections.Generic.KeyValuePair<string, string>[];
		logo: System.Collections.Generic.KeyValuePair<string, string>[];
		poster: System.Collections.Generic.KeyValuePair<string, string>[];
	}
	interface SpotImageUrls {
		art: System.Collections.Generic.KeyValuePair<string, string>[];
		logo: System.Collections.Generic.KeyValuePair<string, string>[];
	}
}
declare module StageMe.Common.Web.Models.Views.Viewer {
	interface SeasonViewer {
		seasonRoles: StageMe.Common.Web.Models.Views.Viewer.SeasonViewerRoles;
	}
	interface SeasonViewerRoles {
		stats: StageMe.Common.Web.Models.Views.Viewer.SeasonViewerStats;
	}
	interface SeasonViewerStats {
		spotsViewed: number;
	}
	interface SpotViewer {
		spotRoles: StageMe.Common.Web.Models.Views.Viewer.SpotViewerRoles;
	}
	interface SpotViewerRoles {
		hasViewed: boolean;
		stats: StageMe.Common.Web.Models.Views.Viewer.SpotViewerStats;
	}
	interface SpotViewerStats {
		hots: number;
		views: number;
	}
	interface SystemViewerRoles {
		isStaff: boolean;
	}
	interface Viewer {
		systemRoles: StageMe.Common.Web.Models.Views.Viewer.SystemViewerRoles;
		userId: string;
	}
}
declare module System.Collections.Generic {
	interface KeyValuePair<TKey, TValue> {
		Key: TKey;
		Value: TValue;
	}
}





