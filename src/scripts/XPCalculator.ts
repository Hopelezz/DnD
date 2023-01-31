
//based on the party size and each characters level calculate the total party xp needed
export default function XPCalc(partySize: number, chr1lvl: number, chr2lvl: number, chr3lvl: number, chr4lvl: number, chr5lvl: number, chr6lvl: number) {
    
        let totalXpParty = 0;
        let totalXpEasy = 0;
        let totalXpMedium = 0;
        let totalXpHard = 0;
        let totalXpDeadly = 0;
        
        //Defines the xp needed for each level threshold 
        let XpPerLevel = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
        let easyThreshold = [0, 25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800];
        let mediumThreshold = [0, 50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700];
        let hardThreshold = [0, 75, 150, 225, 375, 750, 900, 1100, 1350, 1600, 1900, 2400, 3000, 3400, 3750, 4300, 4800, 5900, 6300, 7300, 8500];
        let deadlyThreshold = [0, 100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5900, 6800, 7700, 9500, 10000, 11500, 12700];

        //Calculates the total xp needed for each character
        let party = [chr1lvl, chr2lvl, chr3lvl, chr4lvl, chr5lvl, chr6lvl];
        let chrXpNeeded = party.map((chr, index) => partySize > index ? XpPerLevel[chr] : 0);
        
        //Sums the total xp needed for each character
        let totalXPNeeded = chrXpNeeded.reduce((a, b) => a + b, 0);
        
        //Calculates the total xp needed for each character for each difficulty
        let chrXpEasy = party.map((chr, index) => partySize > index ? easyThreshold[chr] : 0);
        let chrXpMedium = party.map((chr, index) => partySize > index ? mediumThreshold[chr] : 0);
        let chrXpHard = party.map((chr, index) => partySize > index ? hardThreshold[chr] : 0);
        let chrXpDeadly = party.map((chr, index) => partySize > index ? deadlyThreshold[chr] : 0);

        //Sums the total xp needed for the Party
        totalXpParty = totalXPNeeded;
        totalXpEasy = chrXpEasy.reduce((a, b) => a + b, 0);
        totalXpMedium = chrXpMedium.reduce((a, b) => a + b, 0);
        totalXpHard = chrXpHard.reduce((a, b) => a + b, 0);
        totalXpDeadly = chrXpDeadly.reduce((a, b) => a + b, 0);
        
        //Returns the total xp needed for the party for each difficulty
        return {
                totalXpParty,
                totalXpEasy,
                totalXpMedium,
                totalXpHard,
                totalXpDeadly
        }
            
}