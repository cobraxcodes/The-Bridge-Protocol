export const transitions = {
  neutral: [
    { mood: "calm", weight: 0.4 },
    { mood: "curious", weight: 0.3 },
    { mood: "anxious", weight: 0.3 }
  ],
  calm: [
    { mood: "calm", weight: 0.5 },
    { mood: "curious", weight: 0.3 },
    { mood: "anxious", weight: 0.2 }
  ],
  anxious: [
    { mood: "anxious", weight: 0.6 },
    { mood: "calm", weight: 0.2 },
    { mood: "impulsive", weight: 0.2 }
  ],
  impulsive: [
    { mood: "impulsive", weight: 0.5 },
    { mood: "calm", weight: 0.2 },
    { mood: "regretful", weight: 0.3 }
  ],
  curious: [
    { mood: "curious", weight: 0.5 },
    { mood: "calm", weight: 0.3 },
    { mood: "anxious", weight: 0.2 }
  ],
  regretful: [
    { mood: "regretful", weight: 0.5 },
    { mood: "anxious", weight: 0.3 },
    { mood: "calm", weight: 0.2 }
  ]

  
};

export const nextMood = (previousMood = "neutral") => {
    const options = transitions[previousMood] || transitions["neutral"]
    const driftFactor = 0.15;

    const adjust = options.map(opt =>{
        if(opt.mood === previousMood){
            return {...opt, weight: opt.weight + driftFactor}
        }
        return opt
    })

    const total = adjust.reduce((sum , o) => sum + o.weight, 0)
    
    const rand = Math.random()
    let cumulative = 0;

    for (let opt of adjust) {
        cumulative += opt.weight / total;
        if(rand < cumulative ){
            return opt.mood
        }
            
    }
    return previousMood;
}

