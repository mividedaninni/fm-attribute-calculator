import {KeyValue} from '@angular/common';

export const USEFULLINKS: Array<KeyValue<string, string>> = [
  {
    key: 'The ultimate personality & media handling guide',
    value: 'https://community.sigames.com/topic/247494-the-ultimate-personalitymedia-handling-guide/'
  },
  {
    key: 'Quantifying the scouting report',
    value: 'https://community.sigames.com/topic/410813-some-research-on-hidden-ratings-quantifying-the-scouting-report/'
  },
  {
    key: 'A guide to hidden attributes',
    value: 'https://www.guidetofm.com/players/attributes#hidden-attributes'
  },
  {
    key: 'Hidden attributes',
    value: 'https://www.reddit.com/r/footballmanagergames/comments/3a9yb4/eli5_hidden_attributes/'
  },
  {
    key: 'Players personalities guide',
    value: 'https://www.guidetofm.com/players/personalities'
  },
  {
    key: 'Read scout reports',
    value: 'https://www.reddit.com/r/footballmanagergames/comments/6z9acn/how_to_read_scout_reports_in_fm_and_avoid_signing'
  },
  {
    key: 'Another attribute calculator in Drive',
    value: 'https://drive.google.com/file/d/0B1Wkkwqh7t3BX25QWEF0NlhtOEU/edit'
  },
];

export enum STATIC_ATTRIBUTE_DESCRIPTION {
  adaptability = 'How well a player settles in a new country. ' +
    'If you are considering signing a foreign player based in another nation, ' +
    'especially if he has never played in your club’s nation before, ' +
    'then you should check for any mention of adaptability on his scout reports.',
  consistency = 'How likely a player is to perform to his full ability in any particular match. ' +
    'Consistency only affects technical and mental attributes. ' +
    'Therefore, players with better physical attributes are less affected by poor consistency.',
  dirtiness = 'How likely a player is to try to break the rules to gain an advantage.' +
    'Higher Dirtiness makes fouls more likely to be committed. It is referred to as \'Competitive Streak\'' +
    'on a player’s coach or scout reports.',
  versatility = 'How well a player plays in a position for which he lacks familiarity.' +
    'Versatility has nothing to do with the versatility rating. ',
  matches = 'How well a player performs in big, high pressure games.' +
    'For young players, it doesn\'t matter if it\'s 17 or 3, you don\'t see it in the report. ' +
    'It looks like it starts to appear once a player is 22 years old. ',
  injury = 'How likely a player is to suffer an injury during a match or in training. ' +
    'A player’s Injury Proneness can be judged by viewing his past injuries ' +
    'on the Injuries section of his History tab.',
}

export const STATIC_ATTRIBUTE_NOTES: { [key: string]: Array<KeyValue<string, string>> } = {
  adaptability: [
    {
      key: 'TODO',
      value: 'TODO'
    },
  ],
  consistency: [
    {
      key: 'Consistent',
      value: '15-20'
    },
    {
      key: 'Fairly consistent',
      value: '12-14'
    },
    {
      key: 'Nothing noted',
      value: '9-11'
    },
    {
      key: 'Needs to work at beco﻿ming more consistent',
      value: '7-8'
    },
    {
      key: 'Must become more consistent',
      value: '1-6'
    },
  ],
  dirtiness: [
    {
      key: 'Can sometimes lead to him bending the rules (red)',
      value: '18-20'
    },
    {
      key: 'Can sometimes lead to him bending the rules (orange)',
      value: '15-17'
    },
    {
      key: 'Occasionally bends the rules',
      value: '12-14'
    },
    {
      key: 'Nothing noted',
      value: '1-11'
    },
  ],
  versatility: [
    {
      key: 'The scouting report describes what you can already see.',
      value: 'Guys who play one position only can have a 15 rating, but the report says can only play one position; ' +
        'guys who play 4 positions have a 5 rating and the report says, "can play multiple positions".'
    },
  ],
  matches: [
    {
      key: 'Relishes big matches',
      value: '15-20'
    },
    {
      key: 'Enjoys big matches',
      value: '12-14'
    },
    {
      key: 'Nothing noted',
      value: '10-11'
    },
    {
      key: 'Doesn\'t enjoy big matches',
      value: '7-9'
    },
    {
      key: 'Doesn\'t feel comfortable in big matches',
      value: '1-6'
    },
  ],
  injury: [
    {
      key: 'Could have real problems',
      value: '18-20'
    },
    {
      key: 'Might have problems',
      value: '15-17'
    },
    {
      key: 'Fairly susceptible',
      value: '12-14'
    },
    {
      key: 'Nothing noted',
      value: '1-11'
    },
  ],
};

export enum STATIC_ATTRIBUTE_DESCRIPTION_LABEL {
  adaptability = 'ADAPTABILITY',
  consistency = 'CONSISTENCY',
  dirtiness = 'DIRTINESS',
  versatility = 'VERSATILITY',
  matches = 'IMPORTANT MATCHES',
  injury = 'INJURY PRONENESS',
}

export const ATTRIBUTE_DESCRIPTION_OBJECT: { [key: string]: string } = {
  ambition: 'How much a player wants to achieve success.',
  controversy: 'How outspoken player is going to be with the press.',
  determination: 'How much a player tries to succeed in his actions during a match even in mentally exhausting circumstances.' +
    'Mentally exhausting circumstances include when a player’s team is losing and when he is performing badly.',
  loyalty: 'This would be the way of measuring player’s wish to remain at his club. ' +
    'It could actually affect whether he stays at his club whenever a bigger team ' +
    'or perhaps a more financially rewarding offer occurs.',
  pressure: 'Way of measuring player’s mental ability to manage difficult circumstances.',
  professionalism: 'Way of measuring player’s approach to and work.',
  sportsmanship: 'Way of measuring player’s attitude when it comes to fair play. ' +
    'This illustrates just how moral player is going to be on the pitch.',
  temperament: 'Way of measuring player’s calmness while involved with specific match situations ' +
    '- things like tackles, fouls as well as bookings.'
};

export class AttributesDescription {
  public static getDescriptionFromKey(key: string): string {
    return ATTRIBUTE_DESCRIPTION_OBJECT[key] ? ATTRIBUTE_DESCRIPTION_OBJECT[key] : '';
  }
}
