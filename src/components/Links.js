import contact from "../data/contact.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  return (
    <div className="flex items-center justify-center lg:gap-20 gap-5 flex-row pb-10">
      <a
        href={contact.contactInformation.socialMedia.facebook}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faFacebookF}
          size="4x"
          className="hover:scale-110 transition"
        />
      </a>
      <a
        href={contact.contactInformation.socialMedia.instagram}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          className="hover:scale-110 transition"
        />
      </a>
      <a href={`mailto:${contact.contactInformation.email}`}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="4x"
          className="hover:scale-110 transition"
        />
      </a>
    </div>
  );
}
