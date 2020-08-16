export const activityList = [
         {
           activityId: 10,
           otherTurnTakers: [
             { turnId: 101, name: "Jason", contact: "in person" },
             { turnId: 102, name: "Katie", contact: "text" },
             { turnId: 103, name: "Charlie", contact: "in person" }
           ],
           turnOrder: [1, 100, 101, 103],
           selectedNextTurn: {
             turnId: 100,
             name: "Charlie",
             contact: "in person"
           },
           nextTurnDate: "N/A",
           nextTurnTime: "N/A",
           activityName: "Order sushi"
         },
         {
           activityId: 11,
           otherTurnTakers: [
             { turnId: 101, name: "Jason", contact: "in person" },
             { turnId: 102, name: "Katie", contact: "text" },
             { turnId: 103, name: "Charlie", contact: "in person" }
           ],
           turnOrder: [1, 100, 101, 103],
           selectedNextTurn: {
             turnId: 102,
             name: "Katie",
             contact: "text"
           },
           nextTurnDate: "08/10/2020",
           nextTurnTime: "12:00am",
           activityName: "Set up a group Zoom meeting"
         },
         {
           activityId: 12,
           otherTurnTakers: [
             { turnId: 101, name: "Jason", contact: "in person" },
             { turnId: 102, name: "Katie", contact: "text" },
             { turnId: 103, name: "Charlie", contact: "in person" }
           ],
           turnOrder: [1, 100, 101, 103],
           selectedNextTurn: {
             turnId: 101,
             name: "Jason",
             contact: "in person"
           },
           nextTurnDate: "08/10/2020",
           nextTurnTime: "12:00am",
           activityName: "Set up a group Zoom meeting"
         },
         {
           activityId: 13,
           otherTurnTakers: [
             { turnId: 101, name: "Jason", contact: "in person" },
             { turnId: 102, name: "Katie", contact: "text" },
             { turnId: 103, name: "Charlie", contact: "in person" }
           ],
           turnOrder: [1, 100, 101, 103],
           selectedNextTurn: {
             turnId: 100,
             name: "me",
             contact: ""
           },
           nextTurnDate: "08/10/2020",
           nextTurnTime: "12:00am",
           activityName: "Set up a group Zoom meeting"
         }
       ];