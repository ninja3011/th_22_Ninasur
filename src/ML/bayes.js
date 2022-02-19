

        var BayesClassifier = require('bayes-classifier')
        var classifier = new BayesClassifier()

        var earthquakeDocuments = [
        `Ground is shaking`,
        `Earthquake with a 7 maginitude `,
        `The city was almost totally destroyed by an earthquake in 1766, and again in 1797.`,
        `The earthquake grew more intense.`,
        `The outbreak was preceded byan earthquake of some severity, after which about 20 explosions took place.`,
        `This structure, which was in the form of a small Doric temple in antis, appears to have suffered from the building above it having been shaken down by an earthquake.`
        ]
        
        var floodDocuments = [
        `The typhoon caused the river to flood`,
        `The damage from the flood was negligible`,
        `His son also died and became the national household deity of the Ahoms. The origin of mankind is connected with a flood legend.`,
        `This underground network of old river-beds underlying the great alluvial plains must be filled to repletion before flood waters will flow over the surface.`,
        `By the end of October the last Turkish regular had quitted Magyar soil, and, to use the words of a contemporary observer, one quarter of Hungary was as utterly destroyed as if a flood had passed over it.`,
        `They retained the belief that the germs of all things slept for ages within the dark flood, personified as Min or NU.`,
        ]

        var hurricaneDocuments = [
        `In 1090 a tremendous hurricane passed over London, and blew down six hundred houses and many churches.`,
        `The hurricane, too, was followed by repeated droughts, and the inhabitants of the out-islands were reduced to indigence and want, a condition which is still, in some measure, in evidence.`,
        `There's a scene in it featuring a particularly fierce hurricane visiting destruction on a small town.`,
        `Also, an above-average probability of U.S. major hurricane landfall is anticipated `,
        `We are currently under a tornado watch which is very common after the eye of the hurricane passes.`,
        `The first-ever 90 mph hurricane winds form in the South Atlantic.`
        ]

        var droughtDocuments = [
        `The situation of drought is very grim and the government is sparing no effort.`,
        `We are suffering from severe drought and water scarcity for the last many years.`,
        `If it does not rain in time, there is failure of crops and drought.`,
        `As the quality of land is deteriorating, the incidence of drought and famine is increasing worldwide.`,
        `We are experiencing a drought right now, having not had any rain or precipitation of any sort in over two months.`,
        `An area will experience a drought if it does not get any precipitation of any kind for an extended period of time, usually a few weeks`
        ]

        var landslideDocuments = [
        `the usually rapid downward movement of a mass of rock, earth, or artificial fill on a slope`,
        `The Tiwaris lost three family members, and 21 more lives were lost in another landslide nearby.`,
        `After the landslide,[http://sentencedict.com/landslide.html] volunteers worked in relays to rescue people buried under the rubble.`,
        `The railroad was blocked by a landslide. `,
        `A seven-year-old boy was found dead after a landslide engulfed a block of flats.`

        ]
        
        classifier.addDocuments(floodDocuments, `Flood`)
        classifier.addDocuments(earthquakeDocuments, `Earthquake`)
        classifier.addDocuments(hurricaneDocuments, `Hurricane`)
        classifier.addDocuments(droughtDocuments, `Drought`)
        classifier.addDocuments(landslideDocuments, `Landslide`)
        classifier.train()
        
    function disasterClassification ( str )  {
        
        return classifier.classify(str);
    }

export default disasterClassification;
