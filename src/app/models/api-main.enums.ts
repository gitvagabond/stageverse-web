module StageMe.Common.Web.Models.Values {
	export const enum eActivityRecipientRole {
		wallRelatedNotApplicable = 0,
		authorFollower = 100,
		commentAuthor = 102,
		subscriber = 103,
		contestant = 104,
		contestantFollower = 105,
		followee = 106,
		followerFollower = 107,
		Host = 108,
		hostFollower = 109,
		newsletterSubscriber = 110,
		member = 111,
		memberFriend = 112,
		judge = 113,
		judgeFollower = 114,
		voterFollower = 115,
		partner = 116,
		partnerFollower = 117,
		supporterFollower = 118,
		submissionSupporter = 119,
		contestantInvitee = 120,
		performer = 121,
		performerFollower = 122,
		reposter = 123,
		reposterFollower = 124,
		voter = 125,
		talentSuggester = 126,
		talentFollower = 127,
		panelist = 128,
		newPanelist = 129,
		staff = 130,
		castInvitee = 131,
		castInviter = 132,
		commentMentionee = 133,
		communityFollower = 134,
		inviterFollower = 135,
		InviteeFollower = 136,
		stagemeAdmin = 999
	}
	export const enum eActivityVerb {
		EventSuspendedNotEnoughSubmissionsRecieved = 1031,
		EventPublicVotingPeriodOpen = 1040,
		EventPublicVotingPeriodClosingSoon = 1041,
		EventJudgingPeriodOpen = 1050,
		EventJudgingPeriodClosingSoon = 1051,
		EventJudgingSelectionsOverdue = 1052,
		EventFinalistsAnnounced = 1060,
		EventWinnersAnnounced = 1070,
		SubmissionPublished = 2000,
		SubmissionWithdrawn = 2001,
		SubmissionIncomplete = 2002,
		SubmissionDisqualified = 2003,
		SubmissionSupported = 2020,
		SubmissionVoted = 2021,
		SubmissionFinalResult = 102030,
		SubmissionQualifiedAsFinalist = 2031,
		SubmissionDidNotQualifyAsFinalist = 2032,
		SubmissionVotingOpen = 2040,
		SubmissionVotingClosingSoon = 2041,
		SubmissionVoteReminder = 2042,
		UserFriendJoinedStage = 3002,
		StageNewsletter = 4000,
		PhaseNotEnoughSubmissionsRcvd = 4001,
		PhaseIncompleteResults = 4003,
		PhaseDelayed = 4004,
		PhaseOpen = 4100,
		PhaseClosed = 1090,
		PhaseClosingSoon = 1091,
		PhaseWinnerAnnouncementDueSoon = 1071,
		PhaseWinnerAnnouncementOverdue = 1072,
		PhaseFinalistAnnouncementDueSoon = 1081,
		PhaseFinalistAnnouncementOverdue = 1082,
		ReportEvent = 1003,
		ReportSubmission = 2004,
		ReportUser = 3003,
		ReportComment = 2013,
		ParticipantInvitedAsJudge = 1011,
		ParticipantInvitedAsPartner = 1012,
		ParticipantInvitedAsHost = 1013,
		ParticipantInvitedAsContestant = 1014,
		ParticipantJoinedAsJudge = 1021,
		ParticipantJoinedAsPartner = 1022,
		ParticipantJoinedAsHost = 1023,
		ParticipantJoinedAsContestant = 1024,
		RoundCreated = 4200,
		UpdateCreated = 1080,
		EventFollowed = 1100,
		ActCommentReplied = 2011,
		EventCreated = 1000,
		EventPublished = 1001,
		EventCancelled = 1002,
		ParticipantLeft = 1030,
		PhaseWinnerAnnouncementExtended = 1073,
		PhaseFinalistAnnouncementExtended = 1083,
		PhaseFinalistsAnnounced = 1075,
		PhaseWinnersAnnounced = 1076,
		RoundCancelled = 4201,
		ActCommented = 2010,
		CommentMentioned = 2012,
		ActReposted = 2070,
		ActCreatedAndValid = 2030,
		ActLiked = 2050,
		ActTalentUpVoted = 2100,
		ActVoted = 2200,
		ActTalentRejected = 2210,
		ActPostedLockedTalent = 2300,
		ActPostedSuggestedTalent = 2350,
		ActValidTalentUnlocked = 2400,
		ActDisqualified = 2600,
		ActReinstated = 2610,
		UserFollowed = 3001,
		TalentSuggested = 5000,
		TalentApproved = 5001,
		TalentRejected = 5002,
		TalentUnlocked = 5003,
		TalentPanelistAdded = 5100,
		TalentPanelistRemoved = 5101,
		FirstActCreatedTalent = 8000,
		FirstActCreatedCommunity = 8003,
		FacebookFriendConnected = 8010,
		NewCastInvitesAdded = 9020,
		MemberSignupViaEmail = 3000,
		MemberSignupViaSocialNetwork = 3004,
		MemberPasswordResetRequested = 9000,
		MemberEmailChangeConfirmationRequired = 9001,
		MemberEmailConfirmationRequired = 9003,
		MemberEmailChangeNotification = 9005,
		MemberDeregistration = 9010,
		CastInvitedViaEmail = 6000,
		CastInvitedViaNetwork = 6010,
		CastAccepted = 6015
	}
	export const enum eActivityWallType {
		Notifications = 1,
		Stage = 2,
		Event = 3,
		EventDashboard = 4,
		Stream = 5,
		Talent = 6
	}
	export const enum eAssetProvider {
		StageMe = 1,
		YouTube = 2,
		Vimeo = 3,
		Cloudinary = 4,
		Wirewax = 5
	}
	export const enum eAssetStatus {
		Initialize = 0,
		Uploaded = 10,
		Transcoding = 20,
		Live = 30,
		Corrupt = 40,
		Deleted = 50
	}
	export const enum eAssetType {
		Video2D = 1,
		Video360 = 2,
		VR = 3,
		Audio = 4,
		Image = 5
	}
	export const enum eAssetUsage {
		Feature = 1,
		Trailer = 2
	}
	export const enum eCatalogueVersion {
		Preview = 800,
		Live = 900
	}
	export const enum eEntityImageType {
		Event = 10,
		Submission = 20,
		User = 60,
		Phase = 50,
		Round = 70,
		Prize = 100,
		Act = 110,
		Community = 120,
		Show = 210,
		Season = 220,
		SpotVideo = 230,
		SpotImage = 231
	}
	export const enum eEntityImageUsageType {
		Artwork = 1,
		Avatar = 2,
		Logo = 3,
		Poster = 4
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
		MetaEntityCommon = 250,
		CaptchaAsset = 500,
		ProfilePromoter = 510,
		MoltinProducts = 520,
		ReleasedShowsFullHierarchyMap = 550,
		InvitationTicket = 800,
		AdjustViewedSpotUponSpotRemoval = 900,
		Contentful = 999,
		AppNotificationUserGrantedAccess = 1000,
		AppNotificationSeasonPublished = 1001
	}
	export const enum eFeatureAssetType {
		Primary = 0,
		Cam1 = 1,
		Cam2 = 2,
		Cam3 = 3,
		QuadView = 4
	}
	export const enum eHotometerSlice {
		FiveHundred = 500
	}
	// export const enum ePromoterType {
	// 	Standard = 100,
	// 	Gold = 500
	// }
	export const enum eSeasonStatus {
		Unreleased = 0,
		Released = 1
	}
	export const enum eSeasonType {
		Performance = 10,
		Product = 20,
		ProductSelector = 30
	}
	export const enum eSpotStatus {
		Initialize = 0,
		Invalid = 1,
		Valid = 2
	}
	export const enum eSpotType {
		Video = 1,
		Image = 2
	}
	export const enum eTagAction {
		ExternalUrl = 2
	}
	export const enum eTagUIType {
		Pulse = 1,
		Dot = 2
	}
	export const enum eTrailerInteractionType {
		None = 0,
		WatchMainAsset = 1,
		LinkToWebsite = 2,
		Invite = 3
	}
	export const enum eDeviceOs {
		iOS = 10,
		Android = 20
	}
}

