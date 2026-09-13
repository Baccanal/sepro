const houseColor = {
  Martin: "#00FF00",
  Cipriani: "#FF0000",
  Quevado: "#FFFF00",
  Rienzi: "#F96407",
  Butler: "#0000FF",

  St_Patrick: "#00FF00",
  St_Rose: "#FF0000",
  St_Gabriel: "#FFFF00",
  St_Cecilia: "#6A38A0",
  St_Thomas: "#0000FF",
};

const monthNames = [
  {
    short: "Jan",
    long: "January",
  },
  {
    short: "Feb",
    long: "February",
  },
  {
    short: "Mar",
    long: "March",
  },
  {
    short: "Apr",
    long: "April",
  },
  {
    short: "May",
    long: "May",
  },
  {
    short: "Jun",
    long: "June",
  },
  {
    short: "Jul",
    long: "July",
  },
  {
    short: "Aug",
    long: "August",
  },
  {
    short: "Sep",
    long: "September",
  },
  {
    short: "Oct",
    long: "October",
  },
  {
    short: "Nov",
    long: "November",
  },
  {
    short: "Dec",
    long: "December",
  },
];

function myBirthMonthDay(dob) {
  const x = dob.split("-");
  const bday = x[2];
  const bmonth = x[1] - 1;
  const byear = x[0];

  return `${monthNames[bmonth].short} ${bday}`;
}

function findZodiacSign(day, month) {
  if ((month == 0 && day <= 19) || (month == 11 && day >= 22)) {
    return "Capricorn";
  } else if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
    return "Aquarius";
  } else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
    return "Pisces";
  } else if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
    return "Aries";
  } else if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
    return "Taurus";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return "Gemini";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
    return "Cancer";
  } else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
    return "Leo";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Virgo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Libra";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
    return "Scorpio";
  } else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
    return "Sagittarius";
  }
}

function zodiacSymbol(sign) {
  let zee;
  switch (sign) {
    case "Aries":
      zee = "<i>Ram</i>";
      break;
    case "Taurus":
      zee = "<i>Bull</i>";
      break;
    case "Gemini":
      zee = "<i>Twins</i> ";
      break;
    case "Cancer":
      zee = "<i>Crab</i> ";
      break;
    case "Leo":
      zee = "<i>Lion</i> ";
      break;

    case "Virgo":
      zee = "<i>Virgin</i> ";
      break;

    case "Libra":
      zee = "<i>Balance</i> ";
      break;

    case "Scorpio":
      zee = "<i>Scorpion</i> ";
      break;

    case "Sagittarius":
      zee = "<i>Archer</i> ";
      break;

    case "Capricorn":
      zee = "<i>Goat</i> ";
      break;

    case "Aquarius":
      zee = "<i>Water Bearer </i> ";
      break;

    case "Pisces":
      zee = "<i>Fish</i> ";
      break;

    default:
      zee = "No value found";
  }

  return zee;
}

function zodiacTime(sign) {
  let zee;
  switch (sign) {
    case "Aries":
      zee = "<i>Mar21-Apr19</i>";
      break;
    case "Taurus":
      zee = "<i>Apr20-May20</i>";
      break;
    case "Gemini":
      zee = "<i>May21-Jun20</i> ";
      break;
    case "Cancer":
      zee = "<i>Jun21-Jul22</i> ";
      break;
    case "Leo":
      zee = "<i>Jul23-Aug22</i>";
      break;

    case "Virgo":
      zee = "<i>Aug23-Sep22</i></i> ";
      break;

    case "Libra":
      zee = "<i>Sep22-Oct22</i> ";
      break;

    case "Scorpio":
      zee = "<i>Oct23-Nov21</i> ";
      break;

    case "Sagittarius":
      zee = "<i>Nov22-Dec21</i>";
      break;

    case "Capricorn":
      zee = "<i>Dec22-Jan19</i>";
      break;

    case "Aquarius":
      zee = "<i>Jan20-Feb18</i>";
      break;

    case "Pisces":
      zee = "<i>Feb19-Mar20</i> ";
      break;

    default:
      zee = "No value found";
  }

  return zee;
}

function age(dob) {
  function getDaysPreviousMonth(monthNow) {
    if (monthNow == 1) {
      return 11;
    } else return monthNow - 2;
  }

  const x = dob.split("-");
  const yearDob = x[0];
  const monthDob = x[1];
  const dayDob = x[2];

  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  const monthNow = dateNow.getMonth() + 1;
  const dayNow = dateNow.getDate();
  //console.log(dayNow);
  let ageDay = 0;
  let ageMonth = 0;
  let ageYear = 0;
  let feb = 0;
  if (yearNow % 4 == 0) {
    feb = 29;
  } else {
    feb = 28;
  }
  const daysInPreviousMonth = [31, 31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30];

  //AGE YEAR

  if (monthNow > monthDob || (monthNow == monthDob && dayNow >= dayDob)) {
    ageYear = yearNow - yearDob;
  } else ageYear = yearNow - yearDob - 1;

  //console.log(ageYear);

  //case-1 birthday has not yet happened
  if (monthNow < monthDob && dayNow >= dayDob) {
    ageMonth = 12 - (monthDob - monthNow);
  } else if (monthNow <= monthDob && dayNow < dayDob) {
    ageMonth = 12 - (monthDob - monthNow) - 1;
  } else if (monthNow >= monthDob && dayNow >= dayDob) {
    ageMonth = monthNow - monthDob;
  } else if (monthNow >= monthDob && dayNow < dayDob) {
    ageMonth = monthNow - monthDob - 1;
  }

  //console.log(ageMonth);

  //AGE DAYS
  //CASE-1 => IF THE MONTH IS ALREADY COUNTED
  if (dayNow >= dayDob) {
    ageDay = dayNow - dayDob;
  } else {
    ageDay =
      dayNow + (daysInPreviousMonth[getDaysPreviousMonth(monthNow)] - dayDob);
    //console.log(daysInPreviousMonth);
  }

  //console.log(ageDay);

  let ys = "";
  let ms = "";
  let ds = "";

  if (ageYear == 1) {
    ys = "yr";
  } else {
    ys = "yrs";
  }

  if (ageMonth == 1) {
    ms = "mth";
  } else {
    ms = "mths";
  }

  if (ageDay == 1) {
    ds = "day";
  } else {
    ds = "days";
  }

  return `${ageYear} ${ys}, ${ageMonth} ${ms}, ${ageDay} ${ds}.`;
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function division(dob) {
  let level;
  const limit_u15 = 2012;
  const limit_u17 = 2010;
  const x = dob.split("-");
  const byear = x[0];

  if (byear >= limit_u15) {
    level = "U15 Player";
  } else if (byear >= limit_u17) {
    level = "U17 Player";
  } else {
    level = "Open Player";
  }
  return level;
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function fdate(dob) {
  const x = dob.split("-");
  const bdays = x[2];
  const bmonths = x[1] - 1;
  const byear = x[0];

  const ctrldob = new Date(byear, bmonths, bdays);
  return ctrldob.toDateString();
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function picColor(school) {
  if (school.toUpperCase() == "PROVI") {
    return "blue";
  } else if (school.toUpperCase() == "SEPOS") {
    return "amber";
  }
}

function backColor(school) {
  if (school.toUpperCase() == "PROVI") {
    return "2017-lapis-blue";
  } else if (school.toUpperCase() == "SEPOS") {
    return "2017-tawny-port";
  }
}

function switchSchoolPics(school) {
  if (school.toUpperCase() == "PROVI") {
    return "proPics";
  } else if (school.toUpperCase() == "SEPOS") {
    return "sepPics";
  }
}

function switchSchoolDob(school) {
  if (school.toUpperCase() == "PROVI") {
    return "proDob";
  } else if (school.toUpperCase() == "SEPOS") {
    return "sepDob";
  }
}

function switchSchool(school) {
  if (school.toUpperCase() == "PROVI") {
    return "pro";
  } else if (school.toUpperCase() == "SEPOS") {
    return "sep";
  }
}

const zodiacTraits = {
  Aries: `<p> <img class="" src="./images/zodiac/Aries.png" alt="Pic" style="float:left;width:100px"> Aries are loud, proud, strong and brave. They can be pretty needy.</p> <p>Aries command your total attention, loyalty and capacity to entertain them. They get bored REAL fast. Aries have a very warm and passionate nature. They are competitive and full-on too. They have a big presence, they can light up a room. And, mostly, they\’re lovely to be around because they genuinely care about other people. Just don\’t get into a competition with them, because we all know how that will end up.</p>  <p><span class=''>Aries Personality Traits:</span> Courageous, Competitive, Honest, Driven, Generous and Energetic. </p>`,

  Taurus: `<p> <img class="" src="./images/zodiac/Taurus.png" alt="Pic" style="float:left;width:100px"> Many people think of Taureans as laidback, even lazy, and extremely stubborn.</p> <p>People who are Taurus ponder deeply on all matters - love, life, money, work, the weather. They deconstruct situations carefully, pull them apart in order to understand how things work and what makes people tick. This takes a while (hence them seeming lazy) and when it\’s done means that their conclusions are thorough and rock-solid (hence why they seem stubborn, because they know their own mind).</p> <p><span class=''>Taurus Personality Traits:</span> Perseverance (possessed), Aesthetic (fussy), Patient (immovable), Sensuous (greedy) and Chilled (zoned out).</p> `,

  Gemini: `<p> <img class="" src="./images/zodiac/Gemini.png" alt="Pic" style="float:left;width:100px"> Gemini main traits are being super-fast, super-smart, super-adaptable and super-curious people. All of this super-ness makes them fascinating to be around, albeit usually only for short spells because they can a) wear you out, b) get easily distracted elsewhere and before you know it, they\’re off.  </p>  <p> Geminis like variety, keeping their options open, having lots of opportunities on the go, and being ~in the know~ about anything, everything, and everyone. Notorious gossips! They are generally kind, but there is a slither of chilliness and detachment, created by their Air element and twin nature. You never quite know which Gemini is showing up, and there’\s always one in the background taking notes, and keeping secrets. </p> <p> <span class=''> Gemini Personality Traits:</span> Versatile / superficial, Smart / ruthless, Youthful / sometimes immature, Fast / erratic and Curious / gossips.</p>`,

  Cancer: `<p> <img class="" src="./images/zodiac/Cancer.png" alt="Pic" style="float:left;width:100px"> The Cancer sign is intense, incredibly charismatic and attractive, but also possessive and moody. They can turn on a sixpence. They are passionate, creative, secretive, intuitive, and caring.  </p> <p> Cancerians command your total loyalty and undivided attention, but they will return it in droves. A ride or die friend and partner. They are always interested in you, and have a knack of ~getting~ exactly how you truly feel, even when you don\’t say it out loud. They are mind readers! They can be a lil\’ dramatic and attention-seeking tbh, and this trait can cause them more relationship woes than they realise. </p> <p> <span class=''>Cancer Personality Traits: </span> Intuitive (read: nosey), Loyal (read: clingy), Enigmatic (moody), Nostalgic (read: vengeful) and Charming (read: manipulative). </p>`,

  Leo: `<p> <img class="" src="./images/zodiac/Leo.png" alt="Pic" style="float:left;width:100px"> Leos are ruled by the Sun. This perfectly represents their innate belief that they are the centre-of-the-universe! That sounds annoying but mostly you\’ll be happy to let them take centre-stage because they work hard for it. This sign of the zodiac is charming, warm, welcoming, funny, protective, and generally great company.  </p>  <p>Leos love to lead, perform, talk, be admired and receive the praise and respect of others. They are naturally regal, and always assume a boss-like stance in any relationship or group dynamic. They are confident, bright and sexy people, though they can be jealous, controlling and possessive at their worst.</p> <p> <span class=''>Leo Personality Traits:</span> Vivacious (attention seeking), Lives the good life (spoilt), Natural leader (egomaniac), Popular (approval-obsessed) and Protective (possessive).</p> <p> <span class=''>Ruling the squad:</span> It\’s likely that the Leo in your squad is the unofficial \‘Social Secretary\’, because they\’ll always know where the hot spots are, as well as having the energy to do all the running around herding the squad into order. They also mediate squad fall outs, cajole squad \‘leavers\’ back into the fold, and keep everyone ticking along.</p>`,

  Virgo: `<p> <img class="" src="./images/zodiac/Virgo.png" alt="Pic" style="float:left;width:100px"> Virgos have extremely high standards, none more so than for themselves, and they obsess over everything. They are fantastic detail-people, love organising stuff, and can be relied on to make everything go smoothly.</p> <p> Virgos can come off as uptight or critical. They love gossip, information, education, entertainment. Their mind is sharp, bright and shrewd. Virgos make great friends, they are 100% solid and also (secretly) naughty fun.</p> <p> <span class=''>Virgo Personality Traits: </span> Maintaining high standard, Modest, Hard workers and Helpful. </p>`,

  Libra: `<p> <img class="" src="./images/zodiac/Libra.png" alt="Pic" style="float:left;width:100px"> Librans are natural diplomats and aesthetically pleasing charmers. </p> <p>Although it all looks smooth and harmonious on the surface (and harmony matters to this sign a great deal - no thank you to chaos and mess), they are big over-thinkers and procrastinators. They love order, structure and balance, and that means a LOT of mental processing needs to happen to make sense of this crazy world. Their minds whirl 24/7, chewing and digesting what\’s going on around them. Librans will always want more time to think, ponder, dissect, and analyse. Libras will always be tactful and diplomatic, and they have a tendency to \‘shape shift\’ to fit in with others. They enjoy easy company and are never going to upset the family at Christmas dinner, or bring up politics or religion or a scandal! <p><span class=''>Libra Personality Traits:</span> Diplomatic, Great listener / a bit of a gossip, A weigher-upper / slightly entitled, Idealist / indecisive, Peacemaker / trouble-shooter, and Artistic / beautifier.</p>`,

  Scorpio: `<p> <img class="" src="./images/zodiac/Scorpio.png" alt="Pic" style="float:left;width:100px"> Scorpios are independent. They can come off as aloof, secretive, detached, and a bit intimidating sometimes. They love analysing and probing others but will not bear the slightest intrusion to their own lives. The one other thing I\’d impress upon you is not to cross a Scorpio. They have a \‘thing\’ about revenge - they don\’t forget or forgive a grudge or even a slight. They will remember and bide their time, and they will issue payback when it suits them.</p> <p><span class=''>Scorpio Personality Traits:</span> Passionate, Persistent, Strategic, Loyal and Independent. </p>`,

  Sagittarius: `<p> <img class="" src="./images/zodiac/Sagittarius.png" alt="Pic" style="float:left;width:100px">Sagittarians are all big hugs, bouncy energy and lots of laughs. They have zero filters, which makes them spontaneous, rude, honest, hilarious and challenging. They\’ll have said things to you which ~scorched~, but five minutes later, all is well again. You just can\’t stay mad at them. </p> <p> Sagittarians are lively, passionate, smart and more philosophical than their clown-y energy may hint at. They love to feel free and resist rules, regulations, constraints and schedules. They just like doing what they do, when they wanna do it. They're born travellers, adventurers, explorers and free spirits. No matter how absurd an escapade they pursue, often land on their feet and smelling of roses.</p> <p> <span class=''>Sagittarian Personality Traits:</span> Honest (tactless), Adventurous (rebellious), Optimistic (naive), Independent (unreliable) and Philosophical (cold)</p> <p> <span class=''>Sports:</span> Physically adept, competitive and outdoorsy, most Sags are built to play sports. They thrive on the challenge of winning, but they also enjoy the team-building (their open and friendly personality makes them a hit with most other players). </p>`,

  Capricorn: `<p> <img class="" src="./images/zodiac/Capricorn.png" alt="Pic" style="float:left;width:100px">Capricorns are the hardest workers of the zodiac and love nothing more than getting ahead in life. They are ambitious, determined, materialistic and strong. They will keep going when others would\’ve given up ten miles back. This makes them great partners in life, as well as friends or collaborators.  </p> <p> Capricorns tend to keep small circles, but are loyal and supportive of their friends and loved ones. They love creating secure, luxurious ~nests~ and living a comfortable, enviable lifestyle. Living well is important to them. Capricorns are born shrewd, they ~get~ what makes others tick, and they are self-aware of their own needs and traits too. </p> <p> <span class=''>Capricorn Personality Traits:</span> Ambitious (workaholic), Persistent (relentless), Realistic (pessimistic), Sensitive (touchy), Practical (dry) and Disciplined (uptight) </p>`,

  Aquarius: `<p> <img class="" src="images/zodiac/Aquarius.png" alt="Pic" style="float:left;width:100px"> Aquarians not only want to save the world, but they\’ve got the engineering and intellectual smarts to actually have a plan on how to do it too. </p> <p> Aquarius\’s symbol represents the gifts of truth and pure intentions that they bring to the world. Aquarians are very upfront people, and they don\’t do shenanigans or shady business. They\’ll tell you how it is and feel no two ways about it if you don\’t like it. Some people find them aloof or cold, but they just keep their emotions more buttoned down than most. </p> <p> <span class=''>Aquarians Personality Traits:</span> Assertive (obstinate), Analytical (detached), Original (eccentric), Humanitarian, Independent (loner) and Easy going. </p>`,

  Pisces: `<p> <img class="" src="./images/zodiac/Pisces.png" alt="Pic" style="float:left;width:100px"> Pisceans are worldly wise ~old souls~ with enormous depths of compassion and empathy for others. On the one hand, they want to be successful, busy, driven and active, but on the other hand, they just want to pull the covers over their head and stay in bed. </p> <p> <span class=''> Piscean Personality Traits:</span> Empathetic (read: emotional), Mystical (read: wild), Romantic (read: soppy), Impressionable (read: elusive), Imaginative (read: fantasist), Pleasure seeking (read: over indulgence).  </p>`,
};
