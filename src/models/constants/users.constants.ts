export const gamesTitles: string[] =
  [
    'WOW',
    'STALKER',
    'LOL',
    'CS:GO',
    'Fallout 3',
    'The Witcher 3',
    'Monster Hunter World',
    'Doki Doki literature club',
    'Horizon ZD',
    'Street Fighter 4',
    'Streets of rage',
    'Warframe',
    'TESO',
    'TES V Skyrim',
    'TEST III Morrowind'
  ]

export function getRandomGame(): string {
  const random = Math.round(Math.random() * gamesTitles.length) - 1;
  return gamesTitles[random];
}