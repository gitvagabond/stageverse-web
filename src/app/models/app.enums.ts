export enum Orientation {
    portrait,
    landscape
}

export enum Direction {
    left,
    right
}

export enum IOSModel {
    Simulator = 0,
    iPhone = 1,
    iPhone3G = 2,
    iPhone3GS = 3,
    iPhone4 = 4,
    iPhone4S = 5,
    iPhone5 = 6,
    iPhone5S = 7,
    iPhone5C = 8,
    iPhone6 = 9,
    iPhone6Plus = 10,
    iPhone6S = 11,
    iPhone6SPlus = 12,
    iPhoneSE = 13,
    iPhone7 = 14,
    iPhone7Plus = 15
}

export enum iPadModel {

}
// API Main Enums

export const enum eCatalogueVersion {
    Preview = 800,
    Live = 900
}

export const enum eTrailerInteractionType {
    None = 0,
    WatchMainAsset = 1,
    LinkToWebsite = 2,
    Invite = 3
}

export const enum eEntityType {
    System = 0,
    Event = 10,
    Submission = 20,
    People = 30,
    Update = 40,
    Phase = 50,
    Stage = 60,
    Round = 70,
    Asset = 80,
    Comment = 90,
    Prize = 100,
    Reported = 110,
    Group = 120,
    PrizeAllocation = 130,
    InviteDefinition = 140,
    Act = 150,
    Talent = 160,
    ActTalent = 170,
    ActionToken = 180,
    CastInvitesTopup = 190,
    Community = 200,
    Show = 210,
    Season = 220,
    Spot = 230,
    TagEntityCommon = 240,
    CaptchaAsset = 500,
    ProfilePromoter = 510,
    MoltinProducts = 520,
    ReleasedShowsFullHierarchyMap = 550,
    InvitationTicket = 800,
    AdjustViewedSpotUponSpotRemoval = 900,
    Contentful = 999
}

export const enum eAssetType {
    Video2D = 1,
    Video360 = 2,
    VR = 3,
    Audio = 4,
    Image = 5
}

export const enum eDeviceOs {
    iOS = 10,
    Android = 20
}

export const enum authTokenProvider {
    StageMe,
    Facebook
}