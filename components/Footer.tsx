// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    title: '素材模型',
    links: [
      { label: '3D模型', href: '/3d-models' },
      { label: 'CAD模型', href: '/cad-models' },
      { label: 'SU模型', href: '/su-models' },
      { label: '贴图', href: '/textures' },
      { label: '材质', href: '/materials' },
      { label: '家具模型', href: '/furniture-models' },
      { label: '灯具模型', href: '/lighting-models' },
      { label: '装饰模型', href: '/decoration-models' },
    ],
  },
  {
    title: '模型分类',
    links: [
      { label: '内部框架模型', href: '/parametric-models' },
      { label: '衣柜模型', href: '/industrial-design-models' },
      { label: '鞋柜模型', href: '/car-models' },
      { label: '抽屉模型', href: '/ship-models' },
      { label: '橱柜模型', href: '/airplane-models' },
      { label: '床头柜模型', href: '/medical-models' },
      { label: '洗衣机柜模型', href: '/sculpture-models' },
      { label: '浴室柜模型', href: '/complex-structures' },
    ],
  },
  {
    title: '产品服务',
    links: [
      { label: '软件下载', href: '/software-download' },
      { label: '模型定制', href: '/custom-models' },
      { label: '渲染服务', href: '/rendering-services' },
      { label: 'VR全景', href: '/vr-panoramas' },
      { label: '教程中心', href: '/tutorials' },
      { label: '行业资讯', href: '/industry-news' },
      { label: '活动专区', href: '/events' },
      { label: '设计师入驻', href: '/become-a-designer' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { label: '公司简介', href: '/about-us' },
      { label: '联系我们', href: '/contact-us' },
      { label: '人才招聘', href: '/careers' },
      { label: '服务协议', href: '/terms-of-service' },
      { label: '隐私政策', href: '/privacy-policy' },
    ],
  },
  {
    title: '用户中心',
    links: [
      { label: '我的主页', href: '/user/dashboard' },
      { label: '我的订单', href: '/user/orders' },
      { label: '我的收藏', href: '/user/favorites' },
      { label: '我的下载', href: '/user/downloads' },
      { label: '账户设置', href: '/user/settings' },
      { label: '帮助中心', href: '/help-center' },
      { label: '意见反馈', href: '/feedback' },
    ],
  },
  {
    title: '商业合作',
    links: [
      { label: '版权声明', href: '/copyright' },
      { label: '品牌合作', href: '/brand-collaboration' },
      { label: '广告服务', href: '/advertising' },
      { label: '友情链接', href: '/links' },
    ],
  },
  {
    title: '网站地图',
    links: [
      { label: '全部模型', href: '/all-models' },
      { label: '全部分类', href: '/all-categories' },
      { label: '热门模型', href: '/popular-models' },
      { label: '最新模型', href: '/latest-models' },
      // 可以根据实际情况添加更多
    ],
  },
];

const socialMedia = [
  { name: '微信公众号', icon: '/images/wechat-qr.png', link: '#' }, // 替换为你的微信公众号二维码
  { name: '微博', icon: '/images/weibo-icon.png', link: '#' },       // 替换为你的微博链接
];

function Footer() {
  return (
    <footer className="w-screen bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-8">
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h6 className="font-semibold text-gray-400 mb-2">{group.title}</h6>
            <ul className="text-sm">
              {group.links.map((link) => (
                <li key={link.label} className="mb-1">
                  <Link href={link.href} className="hover:text-blue-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 flex items-center justify-between border-t border-gray-800 py-4 text-sm">
        <div className="text-gray-500">
          &copy; {new Date().getFullYear()} 3D溜溜网. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4">
          {socialMedia.map((social) => (
            <Link key={social.name} href={social.link} className="hover:opacity-75">
              <Image src={social.icon} alt={social.name} width={24} height={24} />
            </Link>
          ))}
          {/* 可以添加联系电话和邮箱 */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;