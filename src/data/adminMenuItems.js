export const adminMenuItems = [
  {
    type: "main",
    title: '페이지 관리',
    child: true,
    icon: "ModeIcon",
  },
  {
    type: "sub",
    title: '페이지 관리',
    child: false,
    subtitle: '총재 인사말 편집',
    path: '/pageSetting1',
  },
  {
    type: "sub",
    title: '페이지 관리',
    child: false,
    subtitle: '설립목적 편집',
    path: '/pageSetting2',
  },
  {
    type: "sub",
    title: '페이지 관리',
    child: false,
    subtitle: '중앙조직도 편집',
    path: '/pageSetting3',
  },
  {
    type: "main",
    title: '관리자 관리',
    child: false,
    path: '/adminSetting',
    icon: "AdminPanelSettingsIcon"
  },
]