var brain = ["brain-img", 540, 400];
var regions = {
	BA5: "M312.232,33.569l-5.275-2.364L307.256,31l-0.193,0.175c-3.033,2.467-6.719,4.367-10.588,5.7c-5.266,1.667-9.199,3.067-11.799,4.2l-11.6,4.1c-3.601,1.267-6.317,2.65-8.15,4.15l-0.85,0.75l-3.3,2c-1.9,1.2-3.534,2.733-4.9,4.6c-1.9,2.367-2.833,6.85-2.8,13.45c-0.033,1.034,4.717,5.15,14.25,12.35l0.184-0.116l-0.65-0.55c4.033,0.066,9.766-3.033,17.2-9.3c7.201-6.233,10.801-11.083,10.801-14.55c0-1.6-2.633-2.6-7.9-3c-6.031-0.167-9.398-0.3-10.1-0.4v-2.8c0.166-0.066,0.832-0.85,2-2.35c2.166-2.8,4.199-4.483,6.1-5.05l10.699-3c3.168-1.267,8.734-3.933,16.701-8",
	BA6: "M203.6,11c1.433,1.967,4.367,4.8,8.8,8.5c3.333,3.4,5,7.267,5,11.6c0,3.867-0.133,6.467-0.4,7.8c-0.733,3.8-1.4,7.667-2,11.6v3.6c4.4,5.233,7,9.517,7.8,12.85c0.333,1.367,0.5,6.333,0.5,14.9v11c0.4,4.3-0.767,7.9-3.5,10.8c-1.167,1.133-1.833,3.067-2,5.8c-0.2,2.2-1,3.6-2.4,4.2c-6.3,2.467-10.567,4.2-12.8,5.2c-4.333,1.967-7.333,5.167-9,9.6c-0.867,2.367-2.133,6.233-3.8,11.6c-0.467,8.066-0.867,12.6-1.2,13.6c-0.534,1.333-2.4,4.667-5.6,10c-1.8,2.867-2.8,6.667-3,11.4c-0.067,3.167,0,7.95,0.2,14.35l0.4,17.8l0.15,0.9l-5.15,2.8c-1.867,1.133-3.034,2.567-3.5,4.3c-0.767,2.967-1.967,6.833-3.6,11.6c-0.167,0.5-0.467,0.966-0.9,1.4c-1.567,1.367-4.867,2.5-9.9,3.4c-2.233,0.333-4.6,1.1-7.1,2.3l-5.6,2.9c-1.1-0.4-2.467-1.534-4.1-3.4l-3.65-3.8c1.167-0.5,3.55-2.1,7.15-4.8c3.9-2.967,6.233-4.967,7-6c0.633-0.934,1.4-2.367,2.3-4.3c0.7-1.367,1.633-2.2,2.8-2.5c1.6-0.533,2.5-1.733,2.7-3.6v-16.1c-0.033-4.3,0.534-7.6,1.7-9.9c0.5-1.066,1.833-3.35,4-6.85c1.2-2.067,1.867-5,2-8.8c-0.1-0.566,0.067-2.017,0.5-4.35c0.533-2.867,1.3-4.583,2.3-5.15c1.6-1,2.4-3.867,2.4-8.6c0-3.867-0.4-6.6-1.2-8.2l-0.9-4.1c-0.567-2.033-1.733-3.467-3.5-4.3c-0.9-0.567-1.434-0.867-1.6-0.9c-4.5-9.633-6.733-14.466-6.7-14.5c-0.033-4.533,0.367-9.966,1.2-16.3c0.8-6.333,1.2-11.3,1.2-14.9c0-2.1-2.7-7.333-8.1-15.7L141.1,52.1l-0.5-2.4c-0.833-0.733-1.233-1.833-1.2-3.3c0.233-3.133,0.233-5.1,0-5.9c-1.467-4.267-4.533-6.4-9.2-6.4c-6.533-0.167-10.9-0.7-13.1-1.6c-2.534-1-4.1-2.867-4.7-5.6c6.3-4.5,13.3-6.833,21-7c13.1-0.367,20.433-0.7,22-1c5.2-0.966,11.733-2.833,19.6-5.6C182.533,11.3,192.066,10.533,203.6,11z",
	BA8: "M130.2,34.1c4.667,0,7.733,2.133,9.2,6.4c0.233,0.8,0.233,2.767,0,5.9c-0.034,1.467,0.367,2.566,1.2,3.3l0.5,2.4l11.4,17.65c5.4,8.367,8.1,13.6,8.1,15.7c0,3.6-0.4,8.567-1.2,14.9c-0.833,6.333-1.233,11.767-1.2,16.3c-0.033,0.033,2.2,4.867,6.7,14.5c-4.534-0.567-8.267-3.333-11.2-8.3l-5.6-5.7c-2.7-2.667-4.133-5.567-4.3-8.7c-0.367-4.867-2.5-10.667-6.4-17.4c-3.667-6.267-7.267-10.833-10.8-13.7c-1.433-1.133-7.183-3.433-17.25-6.9c-10.4-3.533-17.066-5.367-20-5.5-7.333-0.533-12.5-2.133-15.5-4.8c-2.133-0.767-4.667-1.45-7.6-2.05c-1.4-2-2.833-3.333-4.3-4c3.233-2.5,6.667-5.7,10.3-9.6c1.934-1.333,6.467-3.6,13.6-6.8c3-1.367,7.1-3.9,12.3-7.6l0.9-0.5l10-2.9c0.12-0.003,0.236-0.003,0.35,0h0.75c0.665,0.029,1.415,0.096,2.25,0.2c0.6,2.733,2.167,4.6,4.7,5.6C119.3,33.4,123.667,33.934,130.2,34.1z",
	BA9: "M148.1,117.15l5.6,5.7c2.933,4.967,6.667,7.733,11.2,8.3 c0.167,0.033,0.7,0.333,1.6,0.9c1.767,0.833,2.934,2.267,3.5,4.3l0.9,4.1c0.8,1.6,1.2,4.333,1.2,8.2c0,4.733-0.8,7.6-2.4,8.6 c-1,0.566-1.767,2.283-2.3,5.15c-0.434,2.333-0.6,3.783-0.5,4.35c-6.233,0.066-10.467,0.033-12.7-0.1 -5.1-0.2-8.033-1.333-8.8-3.4c-1.733-4.1-4.267-6.233-7.6-6.4c-2.667-0.133-4.167-0.9-4.5-2.3c-0.333-1.4-1.367-2.1-3.1-2.1 c-1.767,0-3.2,0.9-4.3,2.7c-1.167,1.9-2.667,2.867-4.5,2.9l-12.75,0.4c-0.2-1.933-0.833-3.733-1.9-5.4	c4.4-4.467,7.717-7.767,9.95-9.9c0.467-0.833,0.7-5,0.7-12.5c0-3.9-0.534-12.633-1.6-26.2h-2.4c-2.8,0.533-7.083,2.333-12.85,5.4c-6.067,3.233-10.333,5.167-12.8,5.8c-6.367,2.833-10.633,4.566-12.8,5.2l-6.3,1.2c-1.934,0.467-3.784,1.383-5.55,2.75l-0.45,0.4c-14.333-0.833-24.6-1.217-30.8-1.15c-6.367,0.067-11.7-1.033-16-3.3c-4.8-2.567-7.967-4.2-9.5-4.9L6.05,116l-0.15,0.1l-0.1,0.05v-0.2c0.066-1.7,0.517-3.833,1.35-6.4c1.1-3.4,1.733-5.5,1.9-6.3c1.033-5.534,1.967-8.733,2.8-9.6c2.7-3.267,8.033-8.7,16-16.3c4.5-4.7,10.434-9.333,17.8-13.9c2.233-1.5,7.667-4.617,16.3-9.35c1.467,0.667,2.9,2,4.3,4c2.934,0.6,5.467,1.284,7.6,2.05c3,2.667,8.167,4.267,15.5,4.8c2.934,0.133,9.6,1.967,20,5.5c10.067,3.467,15.817,5.767,17.25,6.9c3.533,2.867,7.133,7.434,10.8,13.7c3.9,6.733,6.033,12.533,6.4,17.4C143.966,111.583,145.4,114.483,148.1,117.15z",
	BA7:  "M295.35,41.7c3.168-1.267,8.734-3.933,16.701-8h0.1c0.333,0.067,6.434,1.533,18.3,4.4c2.467,0.767,4.767,2.367,6.899,4.8c0.734,0.9,2.834,3.167,6.301,6.8c3.633,4.767,11.383,12.383,23.25,22.85c2.3,2.567,6.4,6.567,12.3,12l3.3,2.9c1.4,1.467,2.033,2.867,1.9,4.2l0.5,13.2c-2.566,1.3-5.9,3.8-10,7.5c-6.733,6.133-10.2,9.233-10.4,9.3c-2.267,0.6-5.199,0.833-8.8,0.7c-4.134-0.2-7.217-0.3-9.25-0.3c-8.866,0-14.25,1.4-16.149,4.2c-5.9-4.267-10.117-6.733-12.65-7.4c-0.5-0.133-3.768-1.167-9.801-3.1c-2.633-0.9-5.566-1.333-8.799-1.3c-6.067-0.033-9.834,1.3-11.301,4c-1.4,2.4-5.267,3.6-11.6,3.6c1.633-1.367,2.367-3.767,2.199-7.2c-0.433-3.9-0.633-6.433-0.6-7.6c0-7.934-0.232-12.5-0.699-13.7c-0.867-2.267-4.15-5.883-9.851-10.85l-0.65-0.55c4.033,0.066,9.766-3.033,17.2-9.3c7.2-6.233,10.801-11.083,10.801-14.55c0-1.6-2.634-2.6-7.9-3c-6.033-0.167-9.4-0.3-10.1-0.4v-2.8c0.166-0.066,0.832-0.85,2-2.35c2.166-2.8,4.199-4.483,6.1-5.05L295.35,41.7z",
	BA4: "M286.551,17.3c-3.5,1.9-6.834,4.333-10,7.3c-6.101,5.633-9.434,8.667-10,9.1l-26.2,19.6c-3.1,1.967-4.633,4.783-4.6,8.45c0,0.533,0.083,1.433,0.25,2.7c0.4,2.8,1.517,7.5,3.35,14.1c0.133,0.6,1.367,3.1,3.7,7.5c1.7,3.233,2.6,6.567,2.7,10v0.4c0.367,14.9-4.05,23.967-13.25,27.2c-5.1,1.767-9.966,4.1-14.6,7c-5.967,3.8-10.667,6.533-14.1,8.2c-4.8,2.367-7.2,6.367-7.2,12c0,4.133-1.2,9.067-3.6,14.8c-0.667,1.6-1.267,4.066-1.8,7.4c-0.4,2.867-1.133,5.3-2.2,7.3c-0.6,1.034-1.3,3.717-2.1,8.05c-0.733,3.9-1.1,6.566-1.1,8c0,0.733,0.267,2.6,0.8,5.6l-0.1,2.2l1.7,0.025c0.33,1.354,0.097,2.512-0.7,3.475c-0.867,1-2.233,1.5-4.1,1.5c-1.434,0-2.317-0.367-2.65-1.1l-0.15-0.9l-0.4-17.8c-0.2-6.4-0.267-11.184-0.2-14.35c0.2-4.733,1.2-8.533,3-11.4c3.2-5.333,5.067-8.667,5.6-10c0.333-1,0.733-5.533,1.2-13.6c1.667-5.367,2.933-9.233,3.8-11.6c1.667-4.433,4.667-7.633,9-9.6c2.233-1,6.5-2.733,12.8-5.2c1.4-0.6,2.2-2,2.4-4.2c0.167-2.733,0.833-4.667,2-5.8c2.733-2.9,3.9-6.5,3.5-10.8v-11c0-8.566-0.167-13.533-0.5-14.9c-0.8-3.333-3.4-7.617-7.8-12.85v-3.6c0.6-3.934,1.267-7.8,2-11.6c0.267-1.333,0.4-3.934,0.4-7.8c0-4.333-1.667-8.2-5-11.6c-4.434-3.7-7.367-6.534-8.8-8.5c1.667,0.133,8.833-0.833,21.5-2.9C237.767,6.033,246.383,5,250.95,5c8.8,0,14.5,0.466,17.1,1.4C270.25,7.2,276.417,10.833,286.551,17.3z",
	BA312: "M291.35,16.2c2.167,0,5.334,2.067,9.5,6.2c3.5,3.5,5.434,6.5,5.801,9h0.049c-3.033,2.467-6.482,4.367-10.35,5.7c-5.267,1.667-9.199,3.067-11.8,4.2l-11.6,4.1c-3.6,1.267-6.317,2.65-8.15,4.15l-0.85,0.75l-3.3,2c-1.9,1.2-3.534,2.733-4.9,4.6c-1.9,2.367-2.833,6.85-2.8,13.45c-0.033,1.034,4.717,5.15,14.25,12.35c5.7,4.967,8.984,8.583,9.85,10.85c0.467,1.2,0.7,5.767,0.7,13.7c-0.033,1.167,0.166,3.7,0.6,7.6c0.167,3.434-0.566,5.833-2.199,7.2c-0.867,0.667-1.934,2.933-3.201,6.8c-0.4,1.167-1.867,3.034-4.4,5.6c-4.4,4.6-7.467,7.934-9.2,10c-5.133,5.867-12.733,11.867-22.8,18c-5.867,2.667-10.684,5.033-14.45,7.1c-1.566,0.833-2.933,2.4-4.1,4.7c-1.4,2.667-2.4,4.3-3,4.9c-0.4,1.2-2.966,4.917-7.7,11.15c-4.1,5.3-5.667,9.983-4.7,14.05l-16.1-0.15l0.1-2.2c-0.533-3-0.8-4.867-0.8-5.6c0-1.434,0.367-4.1,1.1-8c0.8-4.333,1.5-7.017,2.1-8.05c1.067-2,1.8-4.433,2.2-7.3c0.533-3.333,1.133-5.8,1.8-7.4c2.4-5.733,3.6-10.667,3.6-14.8c0-5.633,2.4-9.633,7.2-12c3.433-1.667,8.133-4.4,14.1-8.2c4.633-2.9,9.5-5.233,14.6-7c9.2-3.233,13.617-12.3,13.25-27.2v-0.4c-0.1-3.433-1-6.767-2.7-10c-2.333-4.4-3.567-6.9-3.7-7.5c-1.833-6.6-2.95-11.3-3.35-14.1c-0.167-1.267-0.25-2.167-0.25-2.7c-0.033-3.667,1.5-6.483,4.6-8.45l26.2-19.6c0.566-0.433,3.9-3.467,10-9.1c3.167-2.966,6.5-5.4,10-7.3l1.601-0.8C288.717,16.3,289.783,16.2,291.35,16.2z" ,

	BA10: "M5.9,116.1l0.15-0.1l0.3-0.15c1.533,0.7,4.7,2.333,9.5,4.9c4.3,2.267,9.633,3.367,16,3.3c6.2-0.067,16.467,0.317,30.8,1.15c0.066,1.467-1.567,4.45-4.9,8.95c-3.4,4.6-5.1,7.833-5.1,9.7c0,1,0.533,2.8,1.6,5.4c0.8,1.733,1.483,2.933,2.05,3.6c-0.2,0.733,0.05,1.5,0.75,2.3c0.367,0.433,1.066,1.167,2.1,2.2c1.833,1.833,2.867,3.8,3.1,5.9c0.2,1.867,0.667,4.033,1.4,6.5c0.667,2.267,1,4.267,1,6c0,2.3-1.667,6.783-5,13.45c-3.333,6.567-5,12.434-5,17.6c0,4.667,0.933,7.6,2.8,8.8c1.167,0.6,3.433,2.2,6.8,4.8c1.908,0.832,3.541,1.59,4.9,2.275c1.267,0.638,2.3,1.213,3.1,1.725c0.367,0.267,1.934,0.367,4.7,0.3c2.633-0.033,4.233,0.4,4.8,1.3c0,1.233,0.4,3.7,1.2,7.4c0,1.003-0.142,1.886-0.425,2.65c-0.58,1.582-1.771,2.631-3.575,3.15c-1,0.267-3.733,0.4-8.2,0.4c-4.367,0-7.033-0.1-8-0.3c-2.233-0.533-4.133-2.033-5.7-4.5c-2.667-4.1-6.8-6.233-12.4-6.4c-3.733,0.2-6.534,0.3-8.4,0.3c-0.2-0.033-0.466-0.05-0.8-0.05c-2.867-0.2-4.733-1.083-5.6-2.65c-2.8-4.833-6.667-7.233-11.6-7.2c-0.133-0.033-2,2.9-5.6,8.8c-0.934,3.9-2.534,6.034-4.8,6.4c-0.233-1.8-1.6-5.333-4.1-10.6c-2.5-5.1-3.4-7.967-2.7-8.6v-81.95c0-4.433,0.133-7.633,0.4-9.6c0.3-3.1,1.75-5.467,4.35-7.1L5.9,116.1z",

	BA44: "M130.2,152.45c1.733,0,2.767,0.7,3.1,2.1c0.333,1.4,1.833,2.167,4.5,2.3c3.333,0.167,5.867,2.3,7.6,6.4c0.767,2.066,3.7,3.2,8.8,3.4c2.233,0.133,6.467,0.167,12.7,0.1c-0.133,3.8-0.8,6.733-2,8.8c-2.167,3.5-3.5,5.783-4,6.85c-1.167,2.3-1.733,5.6-1.7,9.9v16.1c-0.2,1.867-1.1,3.066-2.7,3.6c-1.167,0.3-2.1,1.133-2.8,2.5c-0.9,1.933-1.667,3.367-2.3,4.3c-0.767,1.033-3.1,3.033-7,6c-3.6,2.7-5.983,4.3-7.15,4.8l-1.05-0.05c-0.305,0-0.621-0.017-0.95-0.05c-1.772-0.189-3.855-0.889-6.25-2.1c-2.833-1.5-6.617-2.25-11.35-2.25v-0.05c-0.034-0.066,0.017-0.9,0.15-2.5c0-1.633-0.667-4.233-2-7.8c-1.267-3.367-1.667-6.7-1.2-10v-18.4c0-1.567-0.833-4.05-2.5-7.45c-1.9-3.8-2.95-6.133-3.15-7c-0.267-1.333-0.333-4.333-0.2-9c0.067-1.633,0.05-3-0.05-4.1l-0.05-0.4l12.75-0.4c1.833-0.033,3.333-1,4.5-2.9C127,153.35,128.433,152.45,130.2,152.45z",

	BA46: "M100.55,109.85c5.767-3.066,10.05-4.867,12.85-5.4h2.4c1.066,13.567,1.6,22.3,1.6,26.2c0,7.5-0.233,11.667-0.7,12.5c-2.233,2.133-5.55,5.433-9.95,9.9l-0.2,0.2c-5.434,3.633-8.633,6.566-9.6,8.8c-0.967,2.067-2.567,4.1-4.8,6.1c-1.9,1.7-2.967,3.5-3.2,5.4c-0.367,2.033-1.167,4.167-2.4,6.4c-0.633,1.367-1.833,3.517-3.6,6.45l-3.2,5.2c-0.133,0.233-0.167,1.333-0.1,3.3c0.066,1.566-0.3,2.867-1.1,3.9c-3.8,5.267-5.633,9-5.5,11.2c0.133,3.062-1.167,7.288-3.9,12.675c-1.359-0.685-2.993-1.443-4.9-2.275c-3.367-2.6-5.633-4.2-6.8-4.8c-1.867-1.2-2.8-4.133-2.8-8.8c0-5.167,1.667-11.033,5-17.6c3.333-6.667,5-11.15,5-13.45c0-1.733-0.333-3.733-1-6c-0.733-2.467-1.2-4.633-1.4-6.5c-0.233-2.1-1.267-4.067-3.1-5.9c-1.034-1.033-1.733-1.767-2.1-2.2c-0.7-0.8-0.95-1.567-0.75-2.3c-0.567-0.667-1.25-1.867-2.05-3.6c-1.066-2.6-1.6-4.4-1.6-5.4c0-1.867,1.7-5.1,5.1-9.7c3.333-4.5,4.967-7.483,4.9-8.95l0.45-0.4c1.767-1.367,3.617-2.283,5.55-2.75l6.3-1.2c2.167-0.633,6.433-2.367,12.8-5.2C90.216,115.017,94.483,113.083,100.55,109.85z",

	BA45: "M96.95,162.05c0.967-2.233,4.167-5.167,9.6-8.8l0.2-0.2c1.067,1.667,1.7,3.467,1.9,5.4l0.05,0.4c0.1,1.1,0.117,2.467,0.05,4.1c-0.133,4.667-0.066,7.667,0.2,9c0.2,0.867,1.25,3.2,3.15,7c1.667,3.4,2.5,5.883,2.5,7.45v18.4c-0.467,3.3-0.066,6.633,1.2,10c1.333,3.567,2,6.167,2,7.8c-0.133,1.6-0.184,2.434-0.15,2.5l-1.05,17.3c-12.833-2.367-21.783-4.633-26.85-6.8l-7.225,0.45c0.283-0.764,0.425-1.647,0.425-2.65c-0.8-3.7-1.2-6.167-1.2-7.4c-0.566-0.9-2.167-1.333-4.8-1.3c-2.767,0.067-4.333-0.033-4.7-0.3c-0.799-0.512-1.833-1.087-3.1-1.725c2.733-5.387,4.033-9.612,3.9-12.675c-0.133-2.2,1.7-5.934,5.5-11.2c0.8-1.033,1.167-2.333,1.1-3.9c-0.067-1.967-0.034-3.067,0.1-3.3l3.2-5.2c1.767-2.934,2.967-5.083,3.6-6.45c1.233-2.233,2.033-4.367,2.4-6.4c0.233-1.9,1.3-3.7,3.2-5.4C94.383,166.15,95.983,164.117,96.95,162.05z",

	BA47: "M62.75,239.3c0.967,0.2,3.633,0.3,8,0.3c4.467,0,7.2-0.133,8.2-0.4c1.804-0.519,2.995-1.568,3.575-3.15l7.225-0.45c5.067,2.167,14.017,4.434,26.85,6.8c0.1,0.566,0.434,1.4,1,2.5c0.667,1.267,1,2.533,1,3.8c0,0.867-0.533,1.533-1.6,2c-0.667,0.667-1.7,2.233-3.1,4.7c-0.867,1.5-1.967,2.733-3.3,3.699h-0.45c-1.5-0.433-2.9-1.399-4.2-2.899c-1.333-1.533-2.733-2.433-4.2-2.7l-13.4-0.4c-9.633,0.534-16.4,0.801-20.3,0.801c-2.867,0-6.8-1.033-11.8-3.1c-4.6-1.834-7.8-3.601-9.6-5.3c-2.667-2.434-6.4-8.05-11.2-16.85c0.333,0,0.6,0.017,0.8,0.05c1.867,0,4.667-0.1,8.4-0.3c5.6,0.167,9.733,2.3,12.4,6.4C58.617,237.267,60.517,238.767,62.75,239.3z",

	BA11: "M71.75,267.1c-9.8-1-17.233-1.4-22.3-1.199c-1.233,0.066-2.633-0.5-4.2-1.701c-1.6-1.332-2.6-2.1-3-2.299c-1.066-0.668-2.9-1.101-5.5-1.301c-2.367-0.199-4.133-0.833-5.3-1.9c-2.333-1.832-4.167-3.366-5.5-4.6c-2.367-2.199-4.267-4.667-5.7-7.4c-0.4-0.667-1.533-1.4-3.4-2.2c-2.3-1-3.7-1.7-4.2-2.1c-1.067-0.8-1.767-2.167-2.1-4.1c-0.467-1.733-1.367-3.167-2.7-4.3c2.267-0.367,3.867-2.5,4.8-6.4c3.6-5.9,5.466-8.833,5.6-8.8c4.934-0.033,8.8,2.367,11.6,7.2c0.867,1.566,2.733,2.45,5.6,2.65c4.8,8.8,8.533,14.417,11.2,16.85c1.8,1.7,5,3.466,9.6,5.3c5,2.067,8.934,3.101,11.8,3.101c3.9,0,10.667-0.268,20.3-0.801l13.4,0.4c1.467,0.267,2.867,1.166,4.2,2.699c1.3,1.5,2.7,2.467,4.2,2.9c-0.4,0-0.55,0.018-0.45,0.051c-1.567,0.166-2.85,0.549-3.85,1.149l-4.1,2.399c-1.767,0.734-3.633,1.101-5.6,1.101l-4.8,0.101c-0.9,0.133-2.233,0.832-4,2.1c-1.433,1.066-3.167,1.434-5.2,1.1H71.75z",

	BA43: "M116.6,242.4l1.05-17.25c4.733,0,8.517,0.75,11.35,2.25c2.395,1.211,4.478,1.912,6.25,2.1c0.329,0.033,0.646,0.05,0.95,0.05l1.05,0.05l3.65,3.8c1.633,1.867,3,3,4.1,3.4c-1.167,2.2-2.267,3.833-3.3,4.9l-1.2,1c-1.8,1.267-4.3,1.567-7.5,0.9c-2.7-0.6-5.1-0.133-7.2,1.4c-2.2,1.633-4.6,2.867-7.2,3.7c0-1.267-0.333-2.533-1-3.8C117.034,243.8,116.7,242.967,116.6,242.4z",

	BA43a: "M210.7,215.9l-0.05,0.05c-8.367,4.167-14.817,6.983-19.35,8.45c-0.333,0.233-0.467,0.55-0.4,0.95c-4.333,2.267-12.1,3.217-23.3,2.85c0.434-0.433,0.733-0.9,0.9-1.4c1.633-4.767,2.833-8.633,3.6-11.6c0.467-1.733,1.633-3.167,3.5-4.3l5.15-2.8c0.333,0.733,1.217,1.1,2.65,1.1c1.867,0,3.233-0.5,4.1-1.5c0.797-0.963,1.03-2.121,0.7-3.475l14.4,0.125c1.1,3.367,2.1,5.617,3,6.75C206.934,212.933,208.633,214.533,210.7,215.9z",

	BA40: "M299.05,114.45c3.233-0.033,6.167,0.4,8.8,1.3c6.033,1.933,9.301,2.966,9.801,3.1c2.533,0.667,6.75,3.133,12.649,7.4c0.233,0.133,0.316,1.066,0.25,2.8c-0.033,1.767-0.2,3.133-0.5,4.1c-0.333,0.933-0.733,1.9-1.2,2.9c-0.8,1.533-1.833,2.767-3.1,3.7l-3.301,2.7c-3.933,3.067-6.467,5.333-7.6,6.8c-1.333,3.667-2.934,6.066-4.8,7.2c-3.233,1.967-5.634,4.367-7.2,7.2c-0.9,1.833-1.833,4.333-2.8,7.5c-0.167,0.467-1.767,3-4.8,7.6c-2.066,3.167-3.1,6.65-3.1,10.45c0,2.434,0.666,5.1,2,8h-2c-6.834-2.367-12.801-4-17.901-4.9c-1.733-0.333-3.4-0.55-5-0.65l-2.1-0.05c-4.167-0.033-6.633,0.5-7.4,1.6c-2.267,3.633-3.867,5.767-4.8,6.4c-3.133,1.9-7.533,4.3-13.2,7.2c-5.1,2.5-9.816,4.333-14.15,5.5l-16.9,3.6c-2.067-1.367-3.767-2.967-5.1-4.8c-0.9-1.133-1.9-3.383-3-6.75c-0.967-4.066,0.6-8.75,4.7-14.05c4.733-6.233,7.3-9.95,7.7-11.15c0.6-0.6,1.6-2.233,3-4.9c1.167-2.3,2.534-3.867,4.1-4.7c3.767-2.067,8.583-4.433,14.45-7.1c10.066-6.133,17.667-12.133,22.8-18c1.733-2.066,4.8-5.4,9.2-10c2.533-2.566,4-4.433,4.4-5.6c1.267-3.867,2.333-6.133,3.201-6.8c6.332,0,10.199-1.2,11.6-3.6C289.217,115.75,292.982,114.417,299.05,114.45z",

	BA39: "M322.399,142.35l3.3-2.7c1.268-0.934,2.301-2.167,3.1-3.7c0.467-1,0.867-1.967,1.201-2.9l12.799,0.1c3.434,0.367,5.967,1.367,7.601,3c1.134,1,2.467,2.667,4,5c2.967,3.433,6.983,6.633,12.05,9.6c8.334,8.333,12.167,17.767,11.5,28.3c-2.434-0.2-4.133,0.883-5.1,3.25c-0.733,1.4-2.334,2.2-4.801,2.4c-1.933,1.5-3.199,2.567-3.799,3.2c-1.5,1.333-2.5,3.066-3,5.2c-1.567,5.867-3.168,9.6-4.801,11.2c-4.166,3.667-5.517,7.4-4.05,11.2l-3.149,0.4c-4.5-0.1-9.351-0.7-14.551-1.8c-5.732-1.233-10.833-1.833-15.3-1.8l-1.8,0.15c-5.967-10.067-13.667-15.183-23.1-15.35h-0.4c-1.334-2.9-2-5.566-2-8c0-3.8,1.033-7.283,3.1-10.45c3.033-4.6,4.633-7.133,4.801-7.6c0.967-3.167,1.899-5.667,2.799-7.5c1.567-2.833,3.967-5.233,7.201-7.2c1.866-1.133,3.467-3.533,4.799-7.2C315.933,147.683,318.467,145.417,322.399,142.35z",

	BA19: "M354.45,141.25c-1.533-2.333-2.866-4-4-5c-1.634-1.633-4.167-2.633-7.601-3l-12.799-0.1c0.299-0.967,0.467-2.333,0.5-4.1c0.066-1.733-0.018-2.667-0.25-2.8c1.899-2.8,7.283-4.2,16.149-4.2c2.033,0,5.116,0.1,9.25,0.3c3.601,0.133,6.533-0.1,8.8-0.7c0.2-0.067,3.667-3.167,10.4-9.3c4.1-3.7,7.434-6.2,10-7.5c1.566-0.833,2.867-1.233,3.9-1.2c2.433-0.033,5.266,1.167,8.5,3.6c1.933,1.433,4.299,3.433,7.1,6c0.867,0.633,1.833,2.433,2.9,5.4c1.1,3.167,2.533,5.633,4.299,7.4c1.334,1.333,2,6,2,14c0,4.067,1.201,8.6,3.601,13.6c2.767,0.4,5.033,1.9,6.8,4.5c1.066,1.467,2.667,3.967,4.801,7.5c0.533,0.7,2,3.333,4.399,7.9c0.267,0.467,0.467,1.167,0.601,2.1c0.199,0.6,0.933,1.533,2.199,2.8h-0.1l-0.301-0.1l0.15,0.1c-3.9,0.233-6.283,0.434-7.15,0.6c-2.133,0.2-4.199,1.317-6.199,3.35c-1.566,1.5-3.467,2.867-5.7,4.1c-1.533,0.867-2.833,2.167-3.899,3.9c-1.334,2.066-2.168,5.767-2.5,11.1c-0.268,3.233-0.5,7.4-0.701,12.5c-1.1,12.233-1.633,18.367-1.6,18.4c-0.934,4.733-3.199,7.4-6.8,8c-9.866,1.6-16.134,4.9-18.8,9.9c0.9,0.3,2.5,0.567,4.8,0.8c0.767,0.268,1.267,0.867,1.5,1.801l0.5,2.6c0.667,1.666,3.601,3.666,8.8,6c0.9,1.9,1.834,4.967,2.801,9.199c2.232,4.801,3.433,8.533,3.6,11.201c2.232,1.967,3.267,7.183,3.1,15.649l-10.4,3.05c-1.799,0.566-5.533,0.566-11.199,0c-5.1-0.434-8.667-0.033-10.7,1.2l-3.5,2.75c-1.634,1.134-3.399,1.7-5.3,1.7c-1.167-3.967-3.367-8.051-6.6-12.25c-0.967-1.233-3.351-5.033-7.15-11.4c-2.5-0.533-3.733-3.333-3.7-8.4c0.067-5.933-0.5-9.5-1.7-10.699c-1.367-1.367-4.566-2.834-9.6-4.4c-3.733-1.133-5.6-3.066-5.6-5.8c0-4.4,0.533-7.033,1.6-7.9c3.133-2.8,5.4-5.267,6.8-7.4c5.2-8.1,8.399-15.45,9.601-22.05l2.399-0.35c-1.467-3.8-0.116-7.533,4.05-11.2c1.633-1.6,3.233-5.333,4.801-11.2c0.5-2.133,1.5-3.867,3-5.2c0.6-0.633,1.866-1.7,3.799-3.2c2.467-0.2,4.067-1,4.801-2.4c0.967-2.367,2.666-3.45,5.1-3.25c0.667-10.533-3.166-19.967-11.5-28.3C361.434,147.883,357.417,144.683,354.45,141.25z",

	BA18: "M439.299,179.95c2.434,2.6,4.033,5.684,4.801,9.25c0.367,1.567,2.1,4.633,5.199,9.2c0.834,2.1,1.351,5.7,1.551,10.8h-1.95c-4.5,1.767-9.067,5.367-13.7,10.8c-4.9,5.767-7.533,10.966-7.9,15.6c-0.566,7.167-0.832,18.466-0.799,33.9c0,3.566,0.332,5.867,1,6.9c0.399,0.533,1.332,1.617,2.799,3.25l0.25,0.25l0.351,0.5l-0.101,4.199c-3.033,4.768-5.033,7.168-6,7.201c-2.366,0.166-5.433,1.1-9.199,2.799c-1.4,0.634-4.2,1.617-8.4,2.951c0.167-8.467-0.867-13.684-3.1-15.65c-0.167-2.667-1.367-6.4-3.6-11.2c-0.967-4.233-1.9-7.3-2.801-9.2c-5.199-2.333-8.133-4.333-8.8-6l-0.5-2.6c-0.233-0.934-0.733-1.533-1.5-1.801c-2.3-0.232-3.899-0.5-4.8-0.799c2.666-5,8.934-8.3,18.8-9.9c3.601-0.6,5.866-3.267,6.8-8c-0.033-0.033,0.5-6.167,1.6-18.4c0.201-5.1,0.434-9.267,0.701-12.5c0.332-5.333,1.166-9.034,2.5-11.1c1.066-1.733,2.366-3.033,3.899-3.9c2.233-1.233,4.134-2.6,5.7-4.1c2-2.033,4.066-3.15,6.199-3.35c0.867-0.167,3.25-0.367,7.15-0.6C435.883,178.75,437.166,179.25,439.299,179.95z",

	BA22: "M427.6,235.6c0.367-4.633,3-9.833,7.9-15.6c4.633-5.434,9.2-9.034,13.7-10.8h1.95c0.133,2.833,0.15,6.434,0.05,10.8l2.8,32.9v11c0,2-0.6,3.467-1.8,4.4c-1.399,0.799-2.267,1.333-2.601,1.6c-2.533,2.133-6.699,6.4-12.5,12.8c-0.133,1.134-0.533,1.767-1.199,1.899H431.1l0.101-4.199l-0.101-0.5h-0.25l-0.25-0.25c-1.467-1.633-2.399-2.717-2.799-3.25c-0.668-1.033-1-3.334-1-6.9C426.768,254.066,427.033,242.767,427.6,235.6z",

	BA37: "M349.3,216l0.75-0.05c-1.2,6.6-4.399,13.95-9.601,22.05c-1.399,2.133-3.666,4.6-6.799,7.4c-1.067,0.867-1.601,3.5-1.601,7.9c0,2.733,1.866,4.667,5.601,5.8c5.033,1.566,8.232,3.033,9.6,4.4c1.199,1.199,1.767,4.767,1.699,10.699c-0.033,5.067,1.201,7.867,3.701,8.4c3.799,6.367,6.183,10.167,7.149,11.4c3.233,4.199,5.433,8.283,6.601,12.25H354.55c-10.434,0-16.967-0.533-19.601-1.6c-2.699-1.101-7.766-1.634-15.199-1.601c-6.733-0.033-13.134,0.967-19.2,3c-6.134,2-9.434,3-9.899,3c0.066-0.333-1.534,0.167-4.801,1.5c-3.805,1.472-7.705,3.329-11.7,5.575l0.4-14.7c0.002-0.05,0.002-0.091,0-0.125c7.942-1.813,14.575-4.681,19.899-8.601c4.967-3.666,7.951-7.766,8.951-12.299c1.966-4.301,3.149-7.967,3.549-11c0.201-1.434,0.301-5.601,0.301-12.5c0-9.834-0.167-15.9-0.5-18.201c-0.934-6.667-3.384-12.283-7.35-16.85l9.149-5.55c3.366-2.167,6.399-3.417,9.101-3.75l1.799-0.15c4.467-0.033,9.567,0.566,15.301,1.8C339.949,215.3,344.8,215.9,349.3,216z",

	BA17: "M294.551,197.2c9.433,0.167,17.133,5.283,23.1,15.35c-2.7,0.333-5.733,1.583-9.1,3.75l-9.15,5.55c-2.301,1.034-4.383,2.883-6.25,5.55c-2.6,4.6-4.268,7.467-5,8.6c-6.834,10.7-10.7,16.533-11.6,17.5c-0.533,0.533-2.4,3.367-5.601,8.5c-2.033,3.367-4.967,5.732-8.8,7.1c-4.2,1.467-8.833,2.167-13.9,2.1l-12.5-0.1c-9.9-0.033-17.617-0.166-23.15-0.4c-13.333-2.399-20.933-3.6-22.8-3.6c-2.8,0-9.3,1.301-19.5,3.9c-8.133,2.1-13.233,3.467-15.3,4.1c0.233-4.566-0.533-9.267-2.3-14.1c-3.167-8.334-4.8-12.7-4.9-13.1c-1.833,0.2-3.2-0.467-4.1-2l-2-4.2c1.033-1.066,2.133-2.7,3.3-4.9l5.6-2.9c2.5-1.2,4.867-1.967,7.1-2.3c5.033-0.9,8.333-2.033,9.9-3.4c11.2,0.367,18.967-0.583,23.3-2.85v9.85c0.933,0.3,2.667,0.567,5.2,0.8c0.867,0.3,1.667,1.5,2.4,3.6c1.7,1.6,5.2,2.4,10.5,2.4c0,2.1,0.817,3.85,2.45,5.25c1.633,1.4,3.8,2.15,6.5,2.25c2.866,0.066,6.3-0.267,10.3-1c2.075,0,4.983,0.233,8.725,0.7c3.134,0.134,5.634-0.366,7.5-1.5c1.267-0.8,2.333-2.366,3.2-4.7c0.399-1.408,2-3.017,4.8-4.825c7.862-5.195,12.395-12.387,13.6-21.575c2.317-1.433,3.475-3.433,3.475-6c-0.033-3.267,0.433-5.333,1.4-6.2c2.067-2,3.167-6.033,3.3-12.1c5.1,0.9,11.066,2.533,17.9,4.9H294.551z",

	BA41: "M269.25,191.65c-1.5,5.5-4.933,10.983-10.3,16.45c-7.233,7.2-11.633,12.1-13.2,14.7c-3.7,5.967-9.117,10.267-16.25,12.9c-8.933,2.467-15.767,4.567-20.5,6.3c-5.3,0-8.8-0.8-10.5-2.4c-0.733-2.1-1.533-3.3-2.4-3.6c-2.533-0.233-4.267-0.5-5.2-0.8v-9.85c-0.067-0.4,0.066-0.716,0.4-0.95c4.533-1.467,10.983-4.283,19.35-8.45l0.05-0.05l16.9-3.6c4.333-1.167,9.05-3,14.15-5.5c5.667-2.9,10.067-5.3,13.2-7.2c0.933-0.633,2.533-2.767,4.8-6.4c0.767-1.1,3.233-1.633,7.4-1.6L269.25,191.65z",

	BA42: "M269.25,191.65c1.6,0.1,3.267,0.316,5,0.65c-0.133,6.067-1.233,10.1-3.3,12.1c-0.967,0.867-1.433,2.933-1.4,6.2c0,2.567-1.158,4.567-3.475,6c-1.205,9.188-5.738,16.38-13.6,21.575c-2.8,1.809-4.4,3.417-4.8,4.825c-0.867,2.333-1.934,3.9-3.2,4.7c-1.866,1.134-4.366,1.634-7.5,1.5c-3.742-0.467-6.65-0.7-8.725-0.7c-4,0.733-7.434,1.066-10.3,1c-2.7-0.1-4.867-0.85-6.5-2.25c-1.633-1.4-2.45-3.15-2.45-5.25c4.733-1.733,11.567-3.833,20.5-6.3c7.133-2.633,12.55-6.933,16.25-12.9c1.567-2.6,5.967-7.5,13.2-14.7C264.317,202.633,267.75,197.15,269.25,191.65z",

	BA38: "M117.8,249.95c1.067-0.467,1.6-1.133,1.6-2c2.6-0.833,5-2.066,7.2-3.7c2.1-1.534,4.5-2,7.2-1.4c3.2,0.667,5.7,0.367,7.5-0.9l1.2-1l2,4.2c0.9,1.533,2.267,2.2,4.1,2c0.1,0.4,1.733,4.766,4.9,13.1c1.767,4.833,2.533,9.533,2.3,14.1c-2.333,0.167-5.167,1.301-8.5,3.4c-3.4,2.1-6.566,3.232-9.5,3.4c-1.767,0.066-3.2,0.699-4.3,1.899c-1.867,1.899-2.967,2.967-3.3,3.2c-1.633,0.967-2.434,4.1-2.4,9.4c-0.033,4.1,2.633,9.217,8,15.35c3.626,4.199,6.902,7.291,9.825,9.275l-0.025,0.049c-0.062,0.121-0.07,0.246-0.025,0.375c0.042,0.134,0.126,0.234,0.25,0.301c0.08,0.043,0.172,0.084,0.275,0.125c-1.167,0.977-2.209,2.602-3.125,4.875c-1.25,1.348-2.691,2.789-4.325,4.324c-0.009,0.017-0.017,0.033-0.025,0.051c-0.801,0.953-1.734,2.97-2.8,6.05v0.024c-0.75,2.25-1.899,3.783-3.45,4.601c-0.048,0.024-0.09,0.058-0.125,0.101c-10.57-10.739-19.003-16.355-25.3-16.851c-9.534-0.899-14.3-9.583-14.3-26.05c0-9.033,2.1-16.334,6.3-21.9c3.9-7.732,7.85-13.699,11.85-17.9l0.575-0.1h0.025c1.333-0.967,2.434-2.199,3.3-3.699C116.1,252.184,117.133,250.617,117.8,249.95z",

	BA20: "M164.775,322.699c7.402,0.367,16.802,0.634,28.2,0.801c7.3,0.369,12.759,0.369,16.375,0c2.132-0.2,5.698-0.6,10.7-1.2c2.479-0.198,5.704-1.249,9.675-3.149c4.167-2.102,7.201-3.318,9.1-3.65c0.016-0.008,0.032-0.017,0.05-0.025c3.133-0.72,14.65-5.57,34.55-14.55l-0.375,14.05c-1.689,1.961-4.273,3.51-7.75,4.65c-4.763,1.619-7.838,2.869-9.225,3.75c-0.017,0.016-0.034,0.033-0.05,0.05c-3.812,3.12-6.328,5.112-7.55,5.976c-2.2,1.514-6.358,2.548-12.475,3.1c-1.689,0.103-4.314,2.128-7.875,6.074c-3.477,3.867-6.394,6.393-8.75,7.576c-5.709,2.898-13.034,4.348-21.975,4.35c-11.017-0.001-22.367-0.635-34.05-1.9c-16.096-1.775-25.154-3.783-27.175-6.025c-0.05-0.053-0.108-0.095-0.175-0.125l-3.25-1.5c1.37-0.992,2.411-2.559,3.125-4.699v0.025c1.001-2.921,1.867-4.838,2.6-5.75l-0.025,0.049c1.676-1.575,3.151-3.051,4.425-4.424c0.043-0.054,0.076-0.112,0.1-0.176c0.982-2.469,2.115-4.119,3.4-4.949c0.018-0.013,0.035-0.029,0.05-0.051C149.29,321.638,155.407,322.213,164.775,322.699z",

	BA21: "M155.201,274.928c2.067-0.633,7.167-2,15.3-4.1c10.2-2.6,16.7-3.9,19.5-3.9c1.867,0,9.467,1.201,22.8,3.601c5.533,0.233,13.25,0.366,23.15,0.399l12.5,0.101c5.067,0.067,9.7-0.634,13.9-2.101c3.833-1.367,6.767-3.732,8.8-7.1c3.201-5.133,5.067-7.967,5.601-8.5c0.9-0.967,4.766-6.8,11.6-17.5c0.732-1.133,2.4-4,5-8.6c1.867-2.668,3.949-4.517,6.25-5.551v-0.003c3.965,4.567,6.416,10.183,7.35,16.851c0.333,2.301,0.5,8.367,0.5,18.201c0,6.898-0.1,11.065-0.301,12.5c-0.4,3.032-1.584,6.698-3.549,11c-1,4.533-3.984,8.633-8.951,12.299c-5.324,3.92-11.957,6.787-19.899,8.601c0.002,0.034,0.002,0.075,0,0.125l0.275,0.525c-19.9,8.98-31.417,13.83-34.55,14.55c-0.018,0.009-0.034,0.018-0.05,0.025c-1.899,0.332-4.933,1.548-9.1,3.65c-3.971,1.899-7.196,2.95-9.675,3.148c-5.002,0.601-8.568,1-10.7,1.2c-3.616,0.369-9.075,0.369-16.375,0c-11.398-0.167-20.798-0.434-28.2-0.801c-9.368-0.486-18.005-2.163-20.075-2.598c-0.015,0.022-0.554,0.529-0.572,0.543l0.572-0.543c-0.103-0.041-0.195-0.082-0.275-0.125c-0.124-0.067-0.208-0.167-0.25-0.301c-0.045-0.129-0.037-0.254,0.025-0.375l0.025-0.049c-2.923-1.984-6.199-5.076-9.825-9.275c-5.367-6.133-8.033-11.25-8-15.351c-0.034-5.299,0.767-8.433,2.4-9.399c0.333-0.233,1.433-1.302,3.3-3.2c1.1-1.199,2.533-1.833,4.3-1.898c2.934-0.168,6.1-1.301,9.5-3.4c3.333-2.1,6.167-3.232,8.5-3.4"
	}; //end  regions.

var rects  = [
	["Amygdala",460, 160, 80,45],
 	["Nucleus_accumbens",460, 10 ,80, 45],
	["Cerebellum",460,60 , 80, 45],
	["Hippocampus",460,110,80,  45] ];


var labels = {
	label39: [323,182,"39"],
	label18: [422,207,"18"],
	label37: [317,287,"37"],
	label21: [200,302,"21"],
	label17: [434,256,"17"],
	label19: [389,164,"19"],
	label6: [181,75,"6"],
	label4: [239,28,"4"],
	label312: [231,140,"312"],
	label7: [333,86,"7"],
	label41: [211,229,"41"],
	label42: [229,244,"42"],
	label40: [256,171,"40"],
	label22: [171,254,"22"],
	label20: [186,338,"20"],
	label38: [117,275,"38"],
	label43: [130,238,"43"],
	label43A: [185,220,"43A"],
	label47: [80,249,"47"],
	label11: [17,240,"11"],
	label45: [87,214,"45"],
	label10: [20,170,"10"],
	label44: [128,188,"44"],
	label46: [78,140,"46"],
	label9: [64,99,"9"],
	label8: [106,56,"8"],
	label5: [265,68,"5"],
	labelHippocampus: [500,129,"Hippocampus"],
	labelNucleus: [500,31,"Nucleus"],
	labelAccumbens: [500,41,"Accumbens"],
	labelCerebellum: [500,86,"Cerebellum"],
	labelAmygdala: [500,188,"Amygdala"]
	};