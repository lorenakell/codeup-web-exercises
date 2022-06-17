// "use strict";
// (function () {
//
// // const githubURL  = fetch("https://api.github.com/users/{username}/events.public");
// //
// // function githubPromise(username) {
// //     return fetch(githubURL, {headers: {`Authorization`: `github_API`}})
// //     .then(response => {return response.json()})
// //         .then(githubEvents => {
// //             for (let githubEvent of githubEvents) {
// //                 if (githubEvent.type === "PushEvent") {
// //                     console.log(githubEvent.created_at.split("T")[0]);
// //                     return githubEvent.created_at.split("T")[0];
// //                 }
// //             }
// //         })
// //         .catch(error => console.log('Promise rejected: ' +
// //             '${error}'));
// // }
// //
// // githubPromise("lorenakell");
// //
// // function githubEventPromise(username) {
// //     let githubResponse = fetch(githubURL, {headers: {`Authorization`: githubToken}});
// //     return githubResponse
// //         .then(response => response.json())
// //         .then(githubEventData => {
// //             for (let githubEvent of githubEventData) {
// //                 if (githubEvent.type === "PushEvent") {
// //                     return new Date(githubEvent.creatd_at);
// //                 }
// //             }
// //         });
// // }
// //
// // function dateOfLastCommit(username) {
// //     return fetch(githubURL, {
// //         Accept: "application/vnd.github.v3+json"
// //     }).then((eventRes) => {
// //         return eventRes.json().then((eventJson) => {
// //             if (!eventRes.ok) throw eventJson;
// //             const lastPush = eventJson.fined(event => event.type === "Pushevent");
// //             if (!lastPush ) throw "Could not find last commit!";
// //             return new Date(lastPush.created_at);
// //         })
// //     });
// // }
// //
// // dateOfLastCommit("lorenakell").then(date => {
// //     const formattedDate = date.toLocaleString("en-US", {
// //         datestyle: "full",
// //         timeStyle: "short",
// //     });
// //     console.log("${username}'s last commit was made on ${formattedDate}");
// // });
//
//
//
// //      CORRECT ANSWER:
//
//
//
//
// // fetch(URL, {headers: {'Authorization': `token ${GITHUB_API}`}})
// // .then(res => res.json())
// // .then(results => results[0])
// //     .then(firstEvent => console.log(firstEvent.created_at))
//
// const getLastCommitEvent = (username) => {
//     const URL = `https://api.github.com/users/${username}/events/public`
//
//     return fetch(URL, {
//         headers: {
//             'Authorization': `token
//     ${GITHUB_API}`
//         }
//     })
//         .then(res => res.json())
//         .then(results => results[0])
//         .then(firstEvent => console.log(firstEvent.created_at))
//         .catch(error => console.error(error))
// }
//
//     getLastCommitEvent("lorenakell");
//
// })();


//  6-7-22

