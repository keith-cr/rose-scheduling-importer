var rhit = rhit || {};

rhit.authManager = null;

rhit.FB_COLLECTION_USER = 'Users';

rhit.menuToggle = false;

rhit.defaultSchedule = {
  days: [{
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Monday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Tuesday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Wednesday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Thursday',
  }, 
  {
    periods: [
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '8:00 AM',
        endTime: '8:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '9:00 AM',
        endTime: '9:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '10:00 AM',
        endTime: '10:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '11:00 AM',
        endTime: '11:50 AM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '12:00 PM',
        endTime: '12:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '1:00 PM',
        endTime: '1:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '2:00 PM',
        endTime: '2:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '3:00 PM',
        endTime: '3:50 PM',
      },
      {
        name: '',
        location: '',
        isFree: true,
        startTime: '4:00 PM',
        endTime: '4:50 PM',
      },
    ],
    name: 'Friday',
  }],
};

rhit.scheduleManager = null;
rhit.settingsManager = null;

rhit.LoginPageController = class {
	constructor() {
		document.querySelector("#loginButton").addEventListener("click", (event) => {
			rhit.authManager.signIn();
		});
	}
}

rhit.AuthManager = class {
	constructor() {
    this._user = null;
    this._userData = null;
	}

	beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
      this._user = user;
      if (this.isAuthenticated) {
        firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(this.uid)
          .onSnapshot((doc) => {
            if (!doc.exists) {
              let loginButton = document.querySelector('#loginButton');
              let errorMessage = document.querySelector('#errorMessageContainer');
              if (errorMessage) {
                errorMessage.style.display = 'block';
              }
              if (loginButton) {
                scheduleImportContainerElem.style.display = 'none';
              }
            } else {
              this._userData = doc.data();
              changeListener();
            }
          }, (error) => {
            // TODO: better error handling
            console.error(error);
          });
      } else {
        this._userData = null;
        changeListener();
      }
		});
	}

	signIn() {
		Rosefire.signIn("b1821bfb-bf42-4f91-bfd1-c3600fdf3c45", (err, rfUser) => {
			if (err) {
				console.log("Rosefire error!");
			}
			console.log("Rosefire success!", rfUser);
			firebase.auth().signInWithCustomToken(rfUser.token).catch((error) => {
				if (error.code === "auth/invalid-custom-token") {
					console.error("Invalid token");
				} else {
					console.error("Custom auth error", error.code, error.message);
				}
			});
		});
	}

	signOut() {
		firebase.auth().signOut();
	}

	get isAuthenticated() {
		return !!this._user;
	}

	get uid() {
    return this._user.uid;
  }

  get sunday() {
    return this._userData.sunday;
  }

  get monday() {
    return this._userData.monday;
  }

  get tuesday() {
    return this._userData.tuesday;
  }

  get wednesday() {
    return this._userData.wednesday;
  }

  get thursday() {
    return this._userData.thursday;
  }

  get friday() {
    return this._userData.friday;
  }

  get saturday() {
    return this._userData.saturday;
  }
}

rhit.ImportPageController = class {
	constructor() {
		// https://stackoverflow.com/questions/16215771/how-to-open-select-file-dialog-via-js
		document.querySelector('#importButton').addEventListener('click', (event) => {
			document.querySelector('#fileInput').click();
		});

		document.querySelector('#fileInput').addEventListener('change', (event) => {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.onerror = () => {
				console.error(reader.error);
			};

			reader.onload = () => {
				this.parseScheduleData(reader.result);
			};

			reader.readAsText(file);
		});
	}

	importSchedule(schedule) {
    let monday = rhit.authManager.monday;
    let tuesday = rhit.authManager.tuesday;
    let wednesday = rhit.authManager.wednesday;
    let thursday = rhit.authManager.thursday;
    let friday = rhit.authManager.friday;

    let day = schedule.days[0];
    for (let i = 0; i < day.periods.length; i++) {
      monday[i] = day.periods[i].isFree;
    } 

    day = schedule.days[1];
    for (let i = 0; i < day.periods.length; i++) {
      tuesday[i] = day.periods[i].isFree;
    }

    day = schedule.days[2];
    for (let i = 0; i < day.periods.length; i++) {
      wednesday[i] = day.periods[i].isFree;
    }

    day = schedule.days[3];
    for (let i = 0; i < day.periods.length; i++) {
      thursday[i] = day.periods[i].isFree;
    }

    day = schedule.days[4];
    for (let i = 0; i < day.periods.length; i++) {
      friday[i] = day.periods[i].isFree;
    }

		firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(rhit.authManager.uid).update({
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
    }).then(function() {
      let successMessageContainerElem = document.querySelector('#successMessageContainer');
      let warningMessageContainerElem = document.querySelector('#warningMessageContainer');
      let scheduleImportContainerElem = document.querySelector('#scheduleImportContainer');
      if (scheduleImportContainerElem) {
        scheduleImportContainerElem.style.display = 'none';
      }
      if (warningMessageContainerElem) {
        warningMessageContainerElem.style.display = 'none';
      }
      if (successMessageContainerElem) {
        successMessageContainerElem.style.display = 'block';
      }
    }).catch(function(error) {
      console.error('Error writing document: ', error);
		});
	}

	parseScheduleData(data) {
		let schedule = rhit.defaultSchedule;

    const jcalData = ICAL.parse(data);
    let cutOffStartDate;
		let cutOffEndDate;
		
    for (const event of jcalData[2]) {
      const eventAttributes = event[1];
      let className;
      let location;
      let startTime;
			let endTime;
			
      for (const attribute of eventAttributes) {
        if (attribute[0] === 'summary') {
          className = attribute[3];
        } else if (attribute[0] === 'location') {
          location = attribute[3];
        } else if (attribute[0] === 'dtstart') {
          startTime = attribute[3];
        } else if (attribute[0] === 'dtend') {
          endTime = attribute[3];
        }
			}
			
      if (!cutOffStartDate || !cutOffEndDate) {
        cutOffEndDate = new Date(startTime);
        cutOffEndDate.setDate(cutOffEndDate.getDate()+(5-cutOffEndDate.getDay()));
        cutOffEndDate.setHours(17);
        cutOffEndDate.setMinutes(0);
        cutOffStartDate = new Date(cutOffEndDate);
        cutOffStartDate.setDate(cutOffEndDate.getDate()-4);
        cutOffStartDate.setHours(7);
        cutOffStartDate.setMinutes(59);
			}
			
      const startDateTime = new Date(startTime);
      const endDateTime = new Date(endTime);
      const dayStart = new Date(startDateTime);
      const dayEnd = new Date(startDateTime);
      dayStart.setHours(8);
      dayStart.setMinutes(0);
      dayEnd.setHours(17);
			dayEnd.setMinutes(0);
			
      if (startDateTime > cutOffStartDate && endDateTime < cutOffEndDate && startDateTime >= dayStart && endDateTime <= dayEnd) {
        let day = schedule.days[new Date(startTime).getDay() - 1];
        let index = 0;
        for (const period of day.periods) {
          const periodStartTime = new Date(dayStart);
          periodStartTime.setHours(Number(period.startTime.split(':')[0]));
          periodStartTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
          if (period.startTime.toLowerCase().includes('pm')) {
            periodStartTime.setHours(periodStartTime.getHours() + 12);
          }
          const periodEndTime = new Date(dayStart);
          periodEndTime.setHours(Number(period.endTime.split(':')[0]));
          periodEndTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
          if (period.endTime.toLowerCase().includes('pm')) {
            periodEndTime.setHours(periodEndTime.getHours() + 12);
          }
          if (periodStartTime >= startDateTime && periodEndTime <= endDateTime) {
            schedule.days[new Date(startTime).getDay() - 1].periods[index] = {
              name: className,
              location,
              isFree: false,
              startTime: period.startTime,
              endTime: period.endTime
            };
          }
          index++;
        }
      }
    }
    
    this.importSchedule(schedule);
	}
}

rhit.ScheduleManager = class {
	constructor(uid) {
		this._uid = uid;
		this._schedule = null;
    this._unsubscribe = null;
    this._hasChanged = false;
    this._changeListener = null;
	}

	beginListening(changeListener) {
    this._changeListener = changeListener;
		this._unsubscribe = firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(this._uid)
			.onSnapshot((doc) => {
				if (!doc.exists) {
					window.location.href = '/import.html';
				} else {
					this._schedule = doc.data();
					changeListener();
				}
			}, (error) => {
				// TODO: better error handling
				console.error(error);
			});
	}

	stopListening() {
		this._unsubscribe();
	}

	getCurrentPeriodIndex() {
		if (this.hasSchedule()) {
			const currTime = new Date();
			for (let i = 0; i < this._schedule.days[0].periods.length; i++) {
				const period = this._schedule.days[0].periods[i];
				const startTime = new Date();
				startTime.setHours(Number(period.startTime.split(':')[0]));
				startTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
				if (period.startTime.toLowerCase().includes('pm') && startTime.getHours() != 12) {
					startTime.setHours(startTime.getHours() + 12);
				}
				const endTime = new Date();
				endTime.setHours(Number(period.endTime.split(':')[0]));
				endTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.endTime.toLowerCase().includes('pm') && endTime.getHours() != 12) {
					endTime.setHours(endTime.getHours() + 12);
				}
				if (startTime <= currTime && currTime <= endTime) {
					return i;
				}
			}
		}
		return -1;
	}

	getClosestPeriodIndex() {
		if (this.hasSchedule()) {
			const currTime = new Date();
			const period = this._schedule.days[0].periods[0];
			const startTime = new Date();
			startTime.setHours(Number(period.startTime.split(':')[0]) && startTime.getHours() != 12);
			startTime.setMinutes(Number(period.startTime.split(':')[1].replace(/\D/g, '')));
			if (startTime > currTime) {
				return 0;
			}
			for (let i = 0; i < this._schedule.days[0].periods.length; i++) {
				const period = this._schedule.days[0].periods[i];
				const startTime = new Date();
				startTime.setHours(Number(period.startTime.split(':')[0])-1);
				startTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.startTime.toLowerCase().includes('pm') && startTime.getHours() != 11) {
					startTime.setHours(startTime.getHours() + 12);
				}
				const endTime = new Date();
				endTime.setHours(Number(period.endTime.split(':')[0]));
				endTime.setMinutes(Number(period.endTime.split(':')[1].replace(/\D/g, '')));
				if (period.endTime.toLowerCase().includes('pm') && endTime.getHours() != 12) {
					endTime.setHours(endTime.getHours() + 12);
        }
				if (startTime <= currTime && currTime <= endTime) {
					return i;
				}
			}
		}
		return -1;
	}

	getCurrentDayIndex() {
		let day = new Date().getDay();
		if (day === 0 || day === 6) {
			return 0;
    }
		return day-1;
	}

	isWeekend() {
		let day = new Date().getDay();
		return day === 0 || day === 6;
	}

	getPeriod(dayIndex, periodIndex) {
		if (this.hasSchedule()) {
      // return a deep copy to prevent direct modification
			return { ...this._schedule.days[dayIndex].periods[periodIndex] };
		}
		return null;
  }
  
  setPeriod(dayIndex, periodIndex, period) {
    if (this.hasSchedule()) {
      if (!this.isEqual(this._schedule.days[dayIndex].periods[periodIndex], period)) {
        this._schedule.days[dayIndex].periods[periodIndex] = period;
        this._hasChanged = true;
      }
		} else {
      throw new Error('Tried to set schedule data before period was loaded.');
    }
  }

  isEqual(p1, p2) {
    return (p1.name === p2.name && p1.location === p2.location) || (p1.isFree && p2.isFree);
  }

  save(callback) {
    if (this._hasChanged) {
      firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE).doc(rhit.authManager.uid).set(this._schedule).then(function() {
        if (callback) {
          callback(true);
        }
      }).catch(function(error) {
        console.error('Error writing document: ', error);
      });  
    } else {
      if (callback) {
        callback(false);
      }
    }
  }

	getDaysLength() {
		if (this.hasSchedule()) {
			return this._schedule.days.length;
		}
	}

	getPeriodsLength() {
		if (this.hasSchedule()) {
			return this._schedule.days[0].periods.length;
		}
	}

	hasSchedule() {
		return !!this._schedule;
	}

	getCurrentPeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
			let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
			}

			let day = this._schedule.days[currDay];

			let period = { ...day.periods[currPeriod] };
			let setStart = false;
			for (let i = 0; i < day.periods.length; i++) {
				if (i === currPeriod) {
					continue;
				} else if (this.isEqual(day.periods[i], period)) {
					if (i < currPeriod && !setStart) {
						period.startTime = day.periods[i].startTime;
						setStart = true;
					} else if (i > currPeriod) {
						period.endTime = day.periods[i].endTime;
					}
				}
			}
			return period;
		}
		return null;
	}

	getNextFreePeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
      let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
			}

			let day = this._schedule.days[currDay];

			let period = { name: '', location: '', isFree: true, startTime: '', endTime: ''};
			let setStart = false;
			for (let i = currPeriod; i < day.periods.length; i++) {
				if (day.periods[i].isFree) {
					if (!setStart) {
						period.startTime = day.periods[i].startTime;
						period.endTime = day.periods[i].endTime;
						setStart = true;
					} else {
						period.endTime = day.periods[i].endTime;
					}
				} else if (i !== currPeriod && !(this.isEqual(day.periods[i], period))) {
					break;
				}
			}
			if (period.startTime === '' || period.endTime === '') {
				return null;
			}
			return period;
		}
		return null;
  }
  
  getNextPeriodExtended() {
		if (this.hasSchedule()) {
			let currDay = this.getCurrentDayIndex();
			let currPeriod = this.getClosestPeriodIndex();
			if (this.isWeekend()) {
				currDay = 0;
				currPeriod = 0;
			} else if (currPeriod === -1) {
				currDay = currDay+1;
				if (currDay === 5) {
					currDay = 0;
				}
				currPeriod = 0;
      }

			let day = this._schedule.days[currDay];

			let period = null;
			let setStart = false;
			for (let i = currPeriod; i < day.periods.length; i++) {
        if (i === currPeriod || day.periods[i].isFree
          || ((day.periods[i].name === day.periods[currPeriod].name && day.periods[i].location === day.periods[currPeriod].location) || (day.periods[i].isFree && day.periods[currPeriod].isFree))) {
					continue;
        }
        
				if (!setStart) {
          period = { ...day.periods[i] };
          setStart = true;
        } else if (this.isEqual(day.periods[i], period)) {
          period.endTime = day.periods[i].endTime;
				} else {
					break;
				}
			}
			return period;
		}
		return null;
  }
  
  getPeriodDisplayName(period) {
    if (period.isFree) {
      return 'Free';
    }
    return period.name;
  }

  getPeriodDisplayLocation(period) {
    if (period.isFree) {
      return '';
    }
    return period.location;
  }

  setSchedule(uid) {
    this.stopListening();
    this._uid = uid;
    this.beginListening(this._changeListener);
  }
}

rhit.MenuController = class {
  constructor(uid) {
    rhit.menuManager = new rhit.MenuManager(rhit.authManager.uid);
    rhit.menuManager.beginListening(this.updateView.bind(this));

    if (uid !== rhit.authManager.uid) {
      document.querySelector(".navbar-myschedule").style.display = "none";
    }

    let menu = document.querySelector("#menu");
    let menuMobile = document.querySelector("#menuMobile");
    let shade = document.querySelector("#shade");
      document.querySelector("#menuButton").addEventListener("click", (event) => {
      if (!rhit.menuToggle) {
        menu.style.width = "400px";
        menuMobile.style.opacity = "1";
        shade.classList.add("active");
      } else {
        menu.style.width = "0";
        menuMobile.style.opacity = "0";
        shade.classList.remove("active");
      }
      rhit.menuToggle = !rhit.menuToggle;
    });
    shade.addEventListener("click", (event) => {
      document.querySelector("#menuButton").click();
    });
    document.querySelector("#menuMobileCancelButton").addEventListener("click", (event) => {
      document.querySelector("#menuButton").click();
    });

    document.querySelector("#myScheduleEntry").addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${rhit.authManager.uid}`;
    });
    document.querySelector("#myScheduleMobile").addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${rhit.authManager.uid}`;
    });

    let search = document.querySelector("#searchMenu");
    search.addEventListener("input", (event) => {
      rhit.menuManager.filter(RegExp(search.value, "i"));
    });
    search.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        search.value = "";
        search.blur();
        rhit.menuManager.filter(RegExp(""));
      }
    });

    document.querySelector("#nowLink" ).setAttribute("href", `now.html?uid=${uid}` );
    document.querySelector("#dayLink" ).setAttribute("href", `day.html?uid=${uid}` );
    document.querySelector("#weekLink").setAttribute("href", `week.html?uid=${uid}`);
  }

  updateView() {

  }
}

rhit.MenuManager = class {
  constructor(uid) {
    this._uid       = uid;
    this._shared    = new Map();
    this._sharedDiv = document.querySelector("#sharedList");
    this._sharedMobileDiv = document.querySelector("#menuMobileDynamicList");
  }

  beginListening(changeListener) {
    this._unsubscribe = firebase.firestore().collection(rhit.FB_COLLECTION_SCHEDULE)
    .onSnapshot((docs) => {
      this._shared = new Map();
      this._sharedDiv.innerHTML = "";
      this._sharedMobileDiv.innerHTML = "";
      for (let doc of docs.docs) {
        if (doc.data().sharedWith && doc.data().sharedWith.includes(this._uid)) {
          firebase.firestore().collection(rhit.FB_COLLECTION_USER).doc(doc.id).get().then((foreignDoc) => {
            this._shared.set(doc.id, { name: foreignDoc.data().displayName, element: this._createSharedElement(foreignDoc.id, foreignDoc.data().displayName) });
          });
        }
      }
      changeListener();
    });
  }

  stopListening() {
    this._unsubscribe();
  }

  filter(regex) {
    for (let [key, value] of this._shared) {
      if (!regex.test(key) && !regex.test(value.name)) {
        value.element.style.display = "none";
      } else {
        value.element.style.display = "block";
      }
    }
  }

  _createSharedElement(uid, displayName) { 
    let template = document.createElement("template");
    template.innerHTML = `<p class="menuMobileEntry">${rhit.sanitizeString(displayName)}</p>`.trim();
    let child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${uid}`;
    });
    this._sharedMobileDiv.appendChild(child);

    template = document.createElement("template");
    template.innerHTML =
    `<div class="menuEntry">
      <p class="menuEntryText">${rhit.sanitizeString(displayName)}</p>
    </div>`.trim();
    child = template.content.firstChild;
    child.addEventListener("click", (event) => {
      window.location.href = window.location.href.split("\?")[0] + `?uid=${uid}`;
    });
    this._sharedDiv.appendChild(child);

    return child;
  }
}

rhit.sanitizeString = (text) => {
  let p = document.createElement("p");
  p.innerText = text;
  return p.innerHTML;
}

rhit.desanitizeString = (text) => {
  let p = document.createElement("p");
  p.innerHTML = text;
  return p.innerText;
}

rhit.checkForRedirects = () => {
	if (document.querySelector("#loginPage") && rhit.authManager.isAuthenticated) {
		window.location.href = "/import.html";
	} else if (!document.querySelector("#loginPage") && !rhit.authManager.isAuthenticated) {
		window.location.href = "/";
	}
}

rhit.initializePage = function() {
	if (document.querySelector("#loginPage")) {
    new rhit.LoginPageController();
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid") ? urlParams.get("uid") : rhit.authManager.uid;

    if (document.querySelector('.btn-log-out')) {
      document.querySelector('.btn-log-out').addEventListener('click', () => {
        rhit.authManager.signOut();
      });
    }

    if (document.querySelector('#importPage')) {
      new rhit.ImportPageController();
    }
  }
};

/* Main */
rhit.main = function () {
	rhit.authManager = new rhit.AuthManager();
	rhit.authManager.beginListening(() => {
		rhit.checkForRedirects();
		rhit.initializePage();
	});
};

rhit.main();
