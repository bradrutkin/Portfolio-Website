__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[3]).connect(function(t){return{currentUser:r(d[0]).getViewer(t),feedStoryTray:r(d[1]).getFeedStoryTrayWithoutOwn(t)}},function(t){return{onWatchAllStories(n){t(r(d[2]).openReelsMedia(n,'reel_feed_timeline'))}}})(i(d[4]));e.default=t},6291456,[9502879,9240580,9240579,5,6291457]);
__d(function(g,r,i,a,m,e,d){"use strict";function t({className:t,feedStoryTray:n,onWatchAllClick:l}){return a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[3]),{className:t,headerText:r(d[4]).STORIES_TEXT,linkTo:"#",onClick:l,placeholder:null==n,secondaryText:null!=n&&n.isEmpty()?null:r(d[4]).WATCH_ALL_TEXT}),a(d[1]).createElement(r(d[2]).Box,{marginTop:2},a(d[1]).createElement(i(d[5]),{useContainer:!0,visibleCount:3.5})))}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const n=3,l=({children:t,marginBottom:n,marginTop:l})=>a(d[1]).createElement(r(d[2]).Box,{color:"white",dangerouslySetClassName:{__className:"b2rUF"},marginBottom:n,marginTop:l,shape:"rounded"},t),o=52,s=550,c=-3;var u=class extends a(d[1]).PureComponent{constructor(...t){super(...t),this.state={leftFixedPosition:null},this.$FeedSidebar1=(()=>{const t=s;a(d[6]).measure(()=>{if(null==this.$FeedSidebar2)return;let n=null;r(d[7]).canUseDOM&&window.pageYOffset>=o&&window.innerHeight>t&&(n=this.$FeedSidebar2.getBoundingClientRect().left),a(d[6]).mutate(()=>{null!=this.$FeedSidebar2&&this.setState({leftFixedPosition:n})})})}),this.$FeedSidebar3=(t=>{t.preventDefault();const n=i(d[8])(this.props.feedStoryTray);n.isEmpty()||this.props.onWatchAllStories(n)})}componentDidMount(){this.$FeedSidebar1(),null!=this.props.onDisplayDone&&this.props.onDisplayDone()}render(){const{currentUser:o,feedStoryTray:s}=this.props,{leftFixedPosition:u}=this.state,p='fixed'===r(d[9]).getPositionStyle()?{top:r(d[9]).getDistanceFromTop()-c}:{};return a(d[1]).createElement(a(d[1]).Fragment,null,a(d[1]).createElement(i(d[10]),{event:"scroll",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[1]).createElement(i(d[10]),{event:"resize",handler:this.$FeedSidebar1,passive:!0,target:window}),a(d[1]).createElement("div",{className:"XmSS_",ref:t=>this.$FeedSidebar2=t}),a(d[1]).createElement("div",{className:`COOzN ${null!=u?"MnWb5":""}`,style:{...p,left:u}},a(d[1]).createElement("div",{className:"m0NAq"},a(d[1]).createElement(i(d[11]),{isVerified:!1,name:i(d[8])(o.fullName),profilePictureUrl:i(d[8])(o.profilePictureUrl),username:i(d[8])(o.username)})),a(d[1]).createElement(l,{marginTop:1},a(d[1]).createElement(t,{feedStoryTray:s,onWatchAllClick:this.$FeedSidebar3})),a(d[1]).createElement(l,{marginBottom:3,marginTop:3},a(d[1]).createElement(i(d[3]),{headerText:r(d[12]).HEADER_TEXT,linkTo:r(d[13]).DISCOVER_PEOPLE_PATH,placeholder:null==s,secondaryText:r(d[14])(1061)}),a(d[1]).createElement(r(d[2]).Box,{marginBottom:1,marginStart:1},a(d[1]).createElement(i(d[12]),{analyticsContext:"desktop",avatarSize:"small",borderlessFollowButton:!0,count:n,footer:null,header:null,hideName:!0,initialRenderCount:n,viewModule:r(d[15]).VIEW_MODULES.desktop_feed}))),a(d[1]).createElement(i(d[16]),{variant:i(d[16]).VARIANTS.sidebar})))}};e.default=u,e.FeedSidebarContainer=l},6291457,[6291458,3,9502792,6291459,9240616,6291460,9502753,131179,9502728,9044045,9371668,6291461,9109530,9502726,9502724,9240663,9043970]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".b2rUF{border:1px solid #e6e6e6}.COOzN,.XmSS_{max-width:293px;position:absolute;right:0;width:100%}.XmSS_{height:0}.COOzN{height:100vh;margin-bottom:30px;padding:0;top:60px}.MnWb5{position:fixed;top:78px}.m0NAq{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:62px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.O_0Fl,._5mToa{border:0;padding:0}._5mToa{border-top:1px solid #efefef;height:1px;margin:0 0 12px;width:100%}.O_0Fl{background-color:transparent;cursor:pointer;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-bottom:12px}.O_0Fl:active,.O_0Fl:focus{outline:0}._7Wsx_{padding:0 0 16px!important}",m.id)},6291458,[9502742]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var o=o=>a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",dangerouslySetClassName:{__className:void 0!==o.className?o.className:''},direction:"row",marginTop:3,paddingX:4,paddingY:1},a(d[1]).createElement(r(d[2]).Box,{flex:"grow"},a(d[1]).createElement(r(d[2]).Text.BodyEmphasized,{color:"secondary",dangerouslySetClassName:{__className:"fTMOG"}},o.headerText)),o.linkTo&&Boolean(o.secondaryText)&&!0===o.placeholder&&a(d[1]).createElement(r(d[2]).Text.Footnote,{color:"secondary"},o.secondaryText),o.linkTo&&Boolean(o.secondaryText)&&!0!==o.placeholder&&a(d[1]).createElement(r(d[2]).Button,{borderless:!0,disabled:!!o.placeholder,color:"secondary",href:o.linkTo,onClick:o.onClick},a(d[1]).createElement(r(d[2]).Text.FootnoteEmphasized,null,o.secondaryText)));e.default=o},6291459,[6291462,3,9502792]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".fTMOG{font-weight:500!important}",m.id)},6291462,[9502742]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const _=r(d[0])(796),O=r(d[0])(1496),E=r(d[0])(1358),T=r(d[0])(772),S=r(d[0])(744),n=r(d[0])(2271);e.YOUR_STORY_TEXT=_,e.STORIES_TEXT=O,e.WATCH_ALL_TEXT=E,e.TAP_TO_PLAY_TEXT=T,e.CLOSE_FRIENDS=S,e.CLOSE_FRIENDS_ONLY=n,e.CLOSE_FRIENDS_INFO_PHOTO=(_=>r(d[0])(1145,{'story owner username':_})),e.CLOSE_FRIENDS_INFO_VIDEO=(_=>r(d[0])(1762,{'story owner username':_}))},9240616,[9502724]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[3]).connect(function(t){const n=r(d[0]).getSeenCountInStoryTray(t);return{hasOwnReel:r(d[0]).userHasReel(t,i(d[1])(t.users.viewerId)),loadingId:t.stories.trayLoadingId,newReelCount:t.stories.feedTray&&t.stories.feedTray.count()-i(d[1])(n),reels:r(d[0]).getFeedStoryTrayWithoutOwn(t),seenReelCount:n,traySession:t.stories.traySession,viewerId:t.users.viewerId}},function(t){return{onLoadReel(n,s,o){t(r(d[2]).openReelsMedia(n,'reel_feed_timeline',s,o))}}})(i(d[4]));e.default=t},6291460,[9240580,9502728,9240579,5,6291463]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(1142),s=68,o=52,n=50,p=r(d[2]).CORE_CONSTANTS.AVATAR_SIZES.medium,l=4,y=10;class _ extends a(d[7]).PureComponent{constructor(...t){super(...t),this.$DesktopStoryTray3=((t,s)=>{this.props.onLoadReel(i(d[3])(this.props.reels),t,s)}),this.$DesktopStoryTray4=((t,s)=>{i(d[4])._("10","0")&&i(d[5]).log(()=>({a_pk:Number(t),has_my_reel:i(d[3])(this.props.hasOwnReel)?1:0,new_reel_count:i(d[3])(this.props.newReelCount),pigeon_reserved_keyword_module:'reel_feed_timeline',tray_position:s,tray_session_id:this.props.traySession,viewed_reel_count:i(d[3])(this.props.seenReelCount)})),r(d[6]).logStoriesEvent({event_name:'reel_tray_impression',containermodule:'reel_feed_timeline',source_of_action:'reel_feed_timeline',ig_userid:this.props.viewerId,tray_session_id:this.props.traySession,media_author:t,tray_position:s,has_my_reel:i(d[3])(this.props.hasOwnReel),new_reel_count:i(d[3])(this.props.newReelCount),viewed_reel_count:i(d[3])(this.props.seenReelCount)})}),this.$DesktopStoryTray5=(({index:t,isVisible:s})=>{const o=i(d[3])(this.props.reels).get(t),{latestReelMedia:n}=o;return a(d[7]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[7]).createElement(i(d[8]),{avatarSize:this.$DesktopStoryTray1(),condensed:this.props.useContainer,isVisible:s,lastUpdated:i(d[3])(n),onClick:this.$DesktopStoryTray3,onScrollEnter:this.$DesktopStoryTray4,reel:o,trayPosition:t}))}),this.$DesktopStoryTray6=(({index:t,isVisible:s})=>a(d[7]).createElement("div",{key:t,style:{height:this.$DesktopStoryTray2()}},a(d[7]).createElement(i(d[9]),{avatarSize:this.$DesktopStoryTray1(),hideAvatarBorder:this.props.useContainer,rounded:this.props.useContainer})))}$DesktopStoryTray1(){return this.props.useContainer?p-y:n}$DesktopStoryTray2(){return this.props.useContainer?o:s}$DesktopStoryTray7(){null!=this.props.reels&&this.props.onDisplayDone()}componentDidMount(){this.$DesktopStoryTray7()}componentDidUpdate(){this.$DesktopStoryTray7()}render(){const{reels:s,visibleCount:o,useContainer:n}=this.props;if(null!=s&&s.isEmpty())return a(d[7]).createElement(r(d[2]).Box,{marginBottom:4,paddingX:n?4:0,paddingY:2},a(d[7]).createElement(r(d[2]).Text.Body,{color:"secondary"},t));const p=this.$DesktopStoryTray2(),y=p*o,_=Math.ceil(y/p);return a(d[7]).createElement(r(d[2]).Box,{dangerouslySetClassName:{__className:n?"":"aD2cN"},marginStart:n?4:0},null==s?a(d[7]).createElement(i(d[10]),{containerSize:y,estimatedItemSize:p,initialRenderCount:_,itemCount:_,overscanCount:0,renderer:this.$DesktopStoryTray6}):a(d[7]).createElement(i(d[10]),{containerSize:y,estimatedItemSize:p,initialRenderCount:_,itemCount:s.count(),overscanCount:l,renderer:this.$DesktopStoryTray5}))}}_.defaultProps={visibleCount:4.5,useContainer:!1};var u=i(d[11])('DesktopStoryTray',_);e.default=u,e.DESKTOP_TRAY_ROW_HEIGHT_CONDENSED=o,e.DESKTOP_STORY_TRAY_AVATAR_SIZE_CONDENSED=p,e.STORY_RING_PADDING=y},6291463,[6291464,9502724,9502792,9502728,9502865,6291465,9240586,3,6291466,6291467,9240757,9109563]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".aD2cN::after{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(250,250,250,0)),to(#fafafa));background-image:-webkit-linear-gradient(top,rgba(250,250,250,0),#fafafa 100%);background-image:linear-gradient(to bottom,rgba(250,250,250,0),#fafafa 100%);bottom:0;content:\"\";height:16px;left:0;pointer-events:none;position:absolute;width:100%;z-index:1}",m.id)},6291464,[9502742]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);let t=0;class s extends a(d[4]).PureComponent{constructor(...s){super(...s),this.$DesktopStoryTrayItem1=i(d[1])(s=>`DesktopStoryTrayItem_${t++}`),this.$DesktopStoryTrayItem3=(t=>{t.preventDefault(),this.props.onClick(this.props.reel.id,this.$DesktopStoryTrayItem1(this.props.reel.id))}),this.$DesktopStoryTrayItem2=(()=>{this.props.onScrollEnter(i(d[2])(this.props.reel.userId),this.props.trayPosition)})}componentDidMount(){this.props.isVisible&&this.$DesktopStoryTrayItem2()}componentDidUpdate(t){!t.isVisible&&this.props.isVisible&&this.$DesktopStoryTrayItem2()}render(){const{avatarSize:t,condensed:s,isMuted:o,isViewer:l,lastUpdated:n,profilePictureUrl:p,username:c}=this.props,u=l?r(d[3]).YOUR_STORY_TEXT:c;return a(d[4]).createElement("button",{className:`BI5t6 ${Boolean(o)?"_5l5M3":""} ${s?"bKWx4":""}`,onClick:this.$DesktopStoryTrayItem3},a(d[4]).createElement(i(d[5]),{clickTargetElementId:this.$DesktopStoryTrayItem1(this.props.reel.id),isClickable:!1,isLink:!1,profilePictureUrl:p,size:t,storyEntrypoint:"reel_feed_timeline",username:c}),a(d[4]).createElement("div",{className:"c6Ldk"},a(d[4]).createElement("div",{className:"rdlLb"},a(d[4]).createElement("span",{className:"jQgLo"},u)),a(d[4]).createElement("div",{className:"_8Scg1"},n&&a(d[4]).createElement(i(d[6]),{className:"ijlbM",isLong:!0,value:n}))))}}s.defaultProps={avatarSize:50,condensed:!1};var o=r(d[9]).connect(function(t,s){const o=r(d[7]).getUserById(t,i(d[2])(s.reel.userId));return{isMuted:s.reel.muted,isSeen:r(d[8]).isReelSeen(s.reel),isViewer:t.users.viewerId===s.reel.id,profilePictureUrl:i(d[2])(o.profilePictureUrl),username:i(d[2])(o.username)}})(s);e.default=o},6291466,[6291468,9240762,9502728,9240616,3,9240760,9240667,9502879,9240580,5]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".BI5t6{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:0;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:60px;padding-left:5px;text-align:left;width:100%}.bKWx4{height:44px}._5l5M3{opacity:.5}.jQgLo{color:#262626}._6ubPb{color:#999}.c6Ldk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-left:14px}._8Scg1,.rdlLb{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rdlLb{font-size:14px;font-weight:600;line-height:18px;margin-bottom:2px}._8Scg1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:14px;text-transform:uppercase}._8Scg1 .ijlbM{font-size:10px;line-height:12px}",m.id)},6291468,[9502742]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var t=function({avatarSize:t,hideAvatarBorder:c,rounded:l}){return a(d[1]).createElement("div",{className:"aDZPy"},a(d[1]).createElement(i(d[2]),{className:"S9Gru",hideAvatarBorder:c,size:t}),a(d[1]).createElement("div",{className:"l9n6R"},a(d[1]).createElement("div",{className:`UhO_X ${l?"DC7KV":""}`}),a(d[1]).createElement("div",{className:`oP6Lh ${l?"DC7KV":""}`})))};e.default=t},6291467,[6291469,3,6291470]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".aDZPy,.l9n6R{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-flex:0}.aDZPy{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:60px;padding-left:5px;width:100%;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.l9n6R{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-left:14px}.DC7KV{border-radius:3px}.UhO_X,.oP6Lh{background:#efefef;height:14px}.UhO_X{width:116px;margin-bottom:4px}.oP6Lh{width:86px}",m.id)},6291469,[9502742]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);var s=class extends a(d[1]).PureComponent{render(){return a(d[1]).createElement("div",{className:"nwXS6"},a(d[1]).createElement(i(d[2]),{className:"_2NjG_",isLink:!0,profilePictureUrl:i(d[3])(this.props.profilePictureUrl),size:50,storyEntrypoint:"reel_feed_timeline",username:i(d[3])(this.props.username)}),a(d[1]).createElement("div",{className:"_0v2O4"},a(d[1]).createElement("div",{className:"SKguc"},a(d[1]).createElement(i(d[4]),{className:"gmFkV",href:r(d[5]).buildUserLink(this.props.username)},this.props.username),this.props.isVerified&&a(d[1]).createElement(i(d[6]),{className:"_0VOjL"})),this.props.name&&a(d[1]).createElement("div",{className:"f5Yes oL_O8"},this.props.name)))}};e.default=s},6291461,[6291471,3,9240760,9502728,9502729,9502745,9240759]);
__d(function(g,r,i,a,m,e,d){"use strict";r(d[0])(".nwXS6{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;margin-bottom:12px;max-height:50px;width:100%;padding-left:5px}._2NjG_{width:50px}.gmFkV,.gmFkV:active,.gmFkV:focus,.gmFkV:hover,.gmFkV:visited{color:#262626;font-weight:600}.f5Yes{color:#999}.SKguc,._0v2O4{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}._0v2O4{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:14px;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.SKguc{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;line-height:18px;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._0VOjL,.oL_O8{display:inline-block}.oL_O8{font-size:12px;line-height:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._0VOjL{margin-left:7px}",m.id)},6291471,[9502742]);