export const fetchWordsByPhoneme = async (phoneme) => {
    const data = {
      at: [
        { level: 0, name: "bat", imageUrl: "bat.jpg" },
        { level: 0, name: "cat", imageUrl: "cat.jpg" },
        { level: 0, name: "fat", imageUrl: "fat.jpg" },
        { level: 0, name: "hat", imageUrl: "hat.jpg" },
        { level: 0, name: "mat", imageUrl: "mat.jpg" },
        { level: 0, name: "pat", imageUrl: "pat.jpg" },
        { level: 0, name: "rat", imageUrl: "rat.jpg" },
        { level: 0, name: "sat", imageUrl: "sat.jpg" },
        { level: 0, name: "flat", imageUrl: "flat.jpg" },
        { level: 0, name: "chat", imageUrl: "chat.jpg" },
        { level: 0, name: "that", imageUrl: "that.jpg" },
        { level: 0, name: "slat", imageUrl: "slat.jpg" },
        { level: 0, name: "spat", imageUrl: "spat.jpg" },
        { level: 0, name: "brat", imageUrl: "brat.jpg" }
      ],
      atch: [
        { level: 0, name: "watch", imageUrl: "watch.jpg" },
        { level: 0, name: "hatch", imageUrl: "hatch.jpg" },
        { level: 0, name: "match", imageUrl: "match.jpg" },
        { level: 0, name: "catch", imageUrl: "catch.jpg" },
        { level: 0, name: "latch", imageUrl: "latch.jpg" },
        { level: 0, name: "patch", imageUrl: "patch.jpg" },
        { level: 0, name: "snatch", imageUrl: "snatch.jpg" },
        { level: 0, name: "dispatch", imageUrl: "dispatch.jpg" },
        { level: 0, name: "attach", imageUrl: "attach.jpg" },
        { level: 0, name: "detach", imageUrl: "detach.jpg" },
        { level: 0, name: "scratch", imageUrl: "scratch.jpg" },
        { level: 0, name: "thatch", imageUrl: "thatch.jpg" },
        { level: 0, name: "unlatch", imageUrl: "unlatch.jpg" }
      ],
      ath: [
        { level: 0, name: "bath", imageUrl: "bath.jpg" },
        { level: 0, name: "math", imageUrl: "math.jpg" },
        { level: 0, name: "path", imageUrl: "path.jpg" },
        { level: 0, name: "wrath", imageUrl: "wrath.jpg" },
        { level: 0, name: "lath", imageUrl: "lath.jpg" },
        { level: 0, name: "oath", imageUrl: "oath.jpg" },
        { level: 0, name: "swath", imageUrl: "swath.jpg" }
      ],
      ate: [
        { level: 0, name: "ate", imageUrl: "ate.jpg" },
        { level: 0, name: "date", imageUrl: "date.jpg" },
        { level: 0, name: "fate", imageUrl: "fate.jpg" },
        { level: 0, name: "gate", imageUrl: "gate.jpg" },
        { level: 0, name: "hate", imageUrl: "hate.jpg" },
        { level: 0, name: "late", imageUrl: "late.jpg" },
        { level: 0, name: "mate", imageUrl: "mate.jpg" }
      ],
      oat: [
        { level: 0, name: "boat", imageUrl: "boat.jpg" },
        { level: 0, name: "coat", imageUrl: "coat.jpg" },
        { level: 0, name: "goat", imageUrl: "goat.jpg" },
        { level: 0, name: "moat", imageUrl: "moat.jpg" }
      ],
      oath: [
        { level: 0, name: "oath", imageUrl: "oath.jpg" },
        { level: 0, name: "loath", imageUrl: "loath.jpg" }
      ],
      eat: [
        { level: 0, name: "beat", imageUrl: "beat.jpg" },
        { level: 0, name: "feat", imageUrl: "feat.jpg" },
        { level: 0, name: "heat", imageUrl: "heat.jpg" },
        { level: 0, name: "meat", imageUrl: "meat.jpg" }
      ],
      treat: [
        { level: 0, name: "treat", imageUrl: "treat.jpg" },
        { level: 0, name: "retreat", imageUrl: "retreat.jpg" }
      ]
    };
  
    return data[phoneme] || [];
  };
  