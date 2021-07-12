export const initialState = {
  IP: JSON.parse(localStorage.getItem("ip"))
    ? JSON.parse(localStorage.getItem("ip"))
    : "192.212.174.101",
  ipData: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : {
        ip: "192.212.174.101",
        location: {
          country: "US",
          region: "California",
          city: "South San Gabriel",
          lat: 34.04915,
          lng: -118.09462,
          postalCode: "",
          timezone: "-07:00",
          geonameId: 5397771,
        },
        as: {
          asn: 7127,
          name: "SCE",
          route: "192.212.0.0/15",
          domain: "",
          type: "",
        },
        isp: "Southern California Edison",
        proxy: {
          proxy: false,
          vpn: false,
          tor: false,
        },
      },
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_IP":
      return {
        ...state,
        IP: action.payload,
      };
    case "SET_IPDATA": {
      return {
        ...state,
        ipData: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
