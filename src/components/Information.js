import contact from "../data/contact.json";

export default function Information() {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex flex-col lg:flex-row w-4/12 max-w-4xl min-w-96">
        <div
          id="contact-info"
          className="w-full flex flex-col items-center pb-5 lg:pb-0"
        >
          <h2 className="text-4xl uppercase font-bold text-center mb-2 font-Oswald">
            Find Us
          </h2>
          {Object.values(contact.contactInformation.address).map(
            (addressInfo) => (
              <p key={addressInfo}>{addressInfo}</p>
            ),
          )}
        </div>
        <div id="opening-hours" className="w-full flex flex-col items-center">
          <h2 className="text-4xl uppercase font-bold text-center font-Oswald mb-2">
            Opening Hours
          </h2>
          <p>Weekdays: {contact.contactInformation.openingHours.weekdays}</p>
          <p>Saturday: {contact.contactInformation.openingHours.saturday}</p>
          <p>Sunday: {contact.contactInformation.openingHours.sunday}</p>
        </div>
      </div>
    </div>
  );
}
