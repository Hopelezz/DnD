
//based on the party size and each characters level calculate the total party xp needed
export default function XPCalc(partySize: number, chr1: number, chr2: number, chr3: number, chr4: number, chr5: number, chr6: number) {
    
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
        let chr1XpNeeded = XpPerLevel[chr1];
        let chr2XpNeeded = partySize < 2 ? 0 : XpPerLevel[chr2];
        let chr3XpNeeded = partySize < 3 ? 0 : XpPerLevel[chr3];
        let chr4XpNeeded = partySize < 4 ? 0 : XpPerLevel[chr4];
        let chr5XpNeeded = partySize < 5 ? 0 : XpPerLevel[chr5];
        let chr6XpNeeded = partySize < 6 ? 0 : XpPerLevel[chr6];

        let chr1XpEasy = easyThreshold[chr1];
        let chr2XpEasy = partySize < 2 ? 0 : easyThreshold[chr2];
        let chr3XpEasy = partySize < 3 ? 0 : easyThreshold[chr3];
        let chr4XpEasy = partySize < 4 ? 0 : easyThreshold[chr4];
        let chr5XpEasy = partySize < 5 ? 0 : easyThreshold[chr5];
        let chr6XpEasy = partySize < 6 ? 0 : easyThreshold[chr6];

        let chr1XpMedium = mediumThreshold[chr1];
        let chr2XpMedium = partySize < 2 ? 0 : mediumThreshold[chr2];
        let chr3XpMedium = partySize < 3 ? 0 : mediumThreshold[chr3];
        let chr4XpMedium = partySize < 4 ? 0 : mediumThreshold[chr4];
        let chr5XpMedium = partySize < 5 ? 0 : mediumThreshold[chr5];
        let chr6XpMedium = partySize < 6 ? 0 : mediumThreshold[chr6];

        let chr1XpHard = hardThreshold[chr1];
        let chr2XpHard = partySize < 2 ? 0 : hardThreshold[chr2];
        let chr3XpHard = partySize < 3 ? 0 : hardThreshold[chr3];
        let chr4XpHard = partySize < 4 ? 0 : hardThreshold[chr4];
        let chr5XpHard = partySize < 5 ? 0 : hardThreshold[chr5];
        let chr6XpHard = partySize < 6 ? 0 : hardThreshold[chr6];
        
        let chr1XpDeadly = deadlyThreshold[chr1];
        let chr2XpDeadly = partySize < 2 ? 0 : deadlyThreshold[chr2];
        let chr3XpDeadly = partySize < 3 ? 0 : deadlyThreshold[chr3];
        let chr4XpDeadly = partySize < 4 ? 0 : deadlyThreshold[chr4];
        let chr5XpDeadly = partySize < 5 ? 0 : deadlyThreshold[chr5];
        let chr6XpDeadly = partySize < 6 ? 0 : deadlyThreshold[chr6];
            
        //Sums the total xp needed for the Party
        totalXpParty = chr1XpNeeded + chr2XpNeeded + chr3XpNeeded + chr4XpNeeded + chr5XpNeeded + chr6XpNeeded;
        totalXpEasy = chr1XpEasy + chr2XpEasy + chr3XpEasy + chr4XpEasy + chr5XpEasy + chr6XpEasy;
        totalXpMedium = chr1XpMedium + chr2XpMedium + chr3XpMedium + chr4XpMedium + chr5XpMedium + chr6XpMedium;
        totalXpHard = chr1XpHard + chr2XpHard + chr3XpHard + chr4XpHard + chr5XpHard + chr6XpHard;
        totalXpDeadly = chr1XpDeadly + chr2XpDeadly + chr3XpDeadly + chr4XpDeadly + chr5XpDeadly + chr6XpDeadly;

        //Returns the total xp needed for the party, and the xp needed for each difficulty
        return {totalXpParty, totalXpEasy, totalXpMedium, totalXpHard, totalXpDeadly};
}

