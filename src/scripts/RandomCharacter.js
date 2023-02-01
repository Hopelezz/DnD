const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
const skills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];
const equipment = ['Longsword', 'Rapier', 'Greatsword', 'Hand Crossbow', 'Light Crossbow', 'Dagger', 'Shield', 'Longbow', 'Shortbow', 'Javelin', 'Quarterstaff', 'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Halberd', 'Lance', 'Maul', 'Morningstar', 'Pike', 'Scythe', 'Shortsword', 'Trident', 'Warpick', 'Warhammer'];


function prioritizeAttributes(charClass) {
    switch (charClass) {
      case 'Barbarian':
        return ['Strength', 'Constitution', 'Dexterity', 'Wisdom', 'Intelligence', 'Charisma'];
      case 'Bard':
        return ['Charisma', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Strength'];
      case 'Cleric':
        return ['Wisdom', 'Constitution', 'Strength', 'Dexterity', 'Intelligence', 'Charisma'];
      case 'Druid':
        return ['Wisdom', 'Constitution', 'Dexterity', 'Strength', 'Intelligence', 'Charisma'];
      case 'Fighter':
        return ['Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma'];
      case 'Monk':
        return ['Dexterity', 'Wisdom', 'Constitution', 'Strength', 'Intelligence', 'Charisma'];
      case 'Paladin':
        return ['Strength', 'Charisma', 'Constitution', 'Wisdom', 'Intelligence', 'Dexterity'];
      case 'Ranger':
        return ['Dexterity', 'Wisdom', 'Strength', 'Constitution', 'Intelligence', 'Charisma'];
      case 'Rogue':
        return ['Dexterity', 'Charisma', 'Constitution', 'Intelligence', 'Wisdom', 'Strength'];
      case 'Sorcerer':
        return ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Strength'];
      case 'Warlock':
        return ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'Strength'];
      case 'Wizard':
        return ['Intelligence', 'Constitution', 'Dexterity', 'Wisdom', 'Charisma', 'Strength'];
      default:
        return ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    }
  }

  const classCantrips = {
    'Barbarian': [],
    'Bard': ['Dancing Lights', 'Friends', 'Light', 'Mage Hand', 'Message', 'Minor Illusion', 'Prestidigitation', 'Vicious Mockery'],
    'Cleric': ['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],
    'Druid': ['Druidcraft', 'Guidance', 'Mending', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shillelagh'],
    'Fighter': [],
    'Monk': [],
    'Paladin': ['Light', 'Sacred Flame', 'Thaumaturgy'],
    'Ranger': [],
    'Rogue': ['Friends', 'Mage Hand', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Thiefs Tool Expertise'],
    'Sorcerer': ['Acid Splash', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', ' Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Sword Burst'],
    'Warlock': ['Eldritch Blast', 'Friends', ' Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Sword Burst'],
    'Wizard': ['Acid Splash', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', ' Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Sword Burst']
  };

  const classSpells = {
    'Barbarian': [],
    'Bard': ["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", "Longstrider", "Silent Image", "Sleep", "Speak with Animals", "Thunderwave"],
    'Cleric': ["Bane", "Bless", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Purify Food and Drink", "Sanctuary", "Shield of Faith"],
    'Druid': ["Animal Friendship", "Barkskin", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Entangle", "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Jump", "Longstrider", "Purify Food and Drink", "Speak with Animals"],
    'Fighter': [],
    'Monk': [],
    'Paladin': ["Bless", "Command", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Divine Favor", "Heroism", "Protection from Evil and Good", "Purify Food and Drink", "Shield of Faith"],
    'Ranger': ["Animal Friendship", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Fog Cloud", "Goodberry", "Jump", "Longstrider", "Speak with Animals"],
    'Rogue': ["Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Jump", "Longstrider", "Silent Image", "Spider Climb", "Tasha's Hideous Laughter"],
    'Sorcerer': ["Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fire Bolt", "Friends", "Frostbite", "Magic Missile", "Ray of Frost", "Shocking Grasp", "Thunderwave"],
    'Warlock': ["Armor of Agathys", "Arms of Hadar", "Charm Person", "Comprehend Languages", "Expeditious Retreat", "Eldritch Blast", "Friends", "Hellish Rebuke", "Illusory Script", "Protection from Evil and Good", "Unseen Servant"],
    'Wizard': ["Alarm", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Expeditious Retreat", "False Life", "Feather Fall", "Fire Bolt", "Friends", "Frostbite", "Light", "Magic Missile", "Mage Armor", "Ray of Frost", "Shocking Grasp", "Sleep"]
  };

  const spellSlotsPerLevel = {
    'Barbarian': [],
    'Bard': {
        'cantrips': [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        'spellsKnown': [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22, 22],
        '1st': [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        '6th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        '7th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        '8th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        '9th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    'Cleric': {
        'cantrips': [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        'spellsKnown': [],
        '1st': [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        '6th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        '7th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        '8th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        '9th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    'Druid': {
        'cantrips': [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        'spellsKnown': [],
        '1st': [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        '6th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        '7th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        '8th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        '9th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    'Paladin': {
        '1st': [0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    },
    'Ranger': {
        'cantrips': [],
        'spellsKnown': [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
        '1st': [0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    },
    'Sorcerer': {
        'cantrips': [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        'spellsKnown': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 15],
        '1st': [2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        '2nd': [0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '3rd': [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '4th': [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        '5th': [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        '6th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        '7th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        '8th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        '9th': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
    },
    'Warlock': {
        'cantrips': [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        'spellsKnown': [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15],
        'spellslots': [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
        'slotsLevel': [1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
        'InvovationsKnown': [0, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8]
    },
};

  
  function randomizeAttributes() {
    let randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      randomNumbers.push(randomInteger(8, 18));
    }
  
    return randomNumbers;
  }
  
  function generateCharacter() {
    let race = races[randomInteger(0, races.length - 1)];
    let charClass = classes[randomInteger(0, classes.length - 1)];
    let alignment = alignments[randomInteger(0, alignments.length - 1)];
    let skill = skills[randomInteger(0, skills.length - 1)];
    let weapon = equipment[randomInteger(0, equipment.length - 1)];
    let priority = prioritizeAttributes(charClass);
    let randomNumbers = randomizeAttributes();
  
    let attributes = {};
    for (let i = 0; i < 6; i++) {
      attributes[priority[i]] = randomNumbers[i];
    }
  
    let character = {
      Race: race,
      Class: charClass,
      Alignment: alignment,
      Skills: skill,
      Weapon: weapon,
      Attributes: attributes
    };
  
    return character;
  }