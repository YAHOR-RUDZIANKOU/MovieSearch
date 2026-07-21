import classes from "./Footer.module.css";
import {
  FaVk,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const SOCIAL_LINKS = [
    { id: "vk", href: "https://vk.com", icon: <FaVk /> },
    { id: "tg", href: "https://t.me", icon: <FaTelegram /> },
    { id: "yt", href: "https://youtube.com", icon: <FaYoutube /> },
    { id: "tt", href: "https://tiktok.com", icon: <FaTiktok /> },
    { id: "ig", href: "https://instagram.com", icon: <FaInstagram /> },
  ];
  return (
    <div className={classes.footer__wrapper}>
      <div className={classes.footer__title}>
        Сервис Кинопоиск может содержать информацию, не предназначенную для
        несовершеннолетних. На Кинопоиске есть фильмы и сериалы, в которых
        упоминаются наркотики. Незаконное потребление наркотических средств,
        психотропных веществ, их аналогов причиняет вред здоровью, их незаконный
        оборот запрещён и влечёт установленную законодательством
        ответственность. Федеральные каналы доступны для бесплатного просмотра
        круглосуточно.
      </div>
      <div className={classes.footer_icons}>
        {SOCIAL_LINKS.map((value) => {
          return (
            <a
              key={value.id}
              href={value.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              {value.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
