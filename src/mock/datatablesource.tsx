export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: "user", headerName: "User", width: 230, renderCell: (params: any) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" alt="avatar" src={params.row.img} />
          {params.row.username}
        </div>
      )
    }
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status", headerName: "Status", width: 160,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  }
]

export const userRows = [
  {
    "id": 1,
    "username": "lbrunotti0",
    "img": "https://robohash.org/perferendissapientecupiditate.png?size=50x50&set=set1",
    "status": 'true',
    "email": "rsheppey0@cnet.com",
    "age": 42
  }, {
    "id": 2,
    "username": "ldollin1",
    "img": "https://robohash.org/temporenihilnumquam.png?size=50x50&set=set1",
    "status": 'true',
    "email": "kstollenwerck1@moonfruit.com",
    "age": 61
  }, {
    "id": 3,
    "username": "asamsworth2",
    "img": "https://robohash.org/quiaoptiorepudiandae.png?size=50x50&set=set1",
    "status": 'true',
    "email": "ktiernan2@xing.com",
    "age": 16
  }, {
    "id": 4,
    "username": "tgwinnett3",
    "img": "https://robohash.org/aliquidautemnon.png?size=50x50&set=set1",
    "status": 'false',
    "email": "kstockow3@npr.org",
    "age": 33
  }, {
    "id": 5,
    "username": "tschimke4",
    "img": "https://robohash.org/minussedomnis.png?size=50x50&set=set1",
    "status": 'true',
    "email": "gcrufts4@nasa.gov",
    "age": 97
  },
  {
    "id": 6,
    "username": "lbrunotti0",
    "img": "https://robohash.org/perferendissapientecupiditate.png?size=50x50&set=set1",
    "status": 'true',
    "email": "rsheppey0@cnet.com",
    "age": 42
  }, {
    "id": 7,
    "username": "tgwinnett3",
    "img": "https://robohash.org/aliquidautemnon.png?size=50x50&set=set1",
    "status": 'false',
    "email": "kstockow3@npr.org",
    "age": 33
  }, {
    "id": 8,
    "username": "tschimke4",
    "img": "https://robohash.org/minussedomnis.png?size=50x50&set=set1",
    "status": 'true',
    "email": "gcrufts4@nasa.gov",
    "age": 97
  }, {
    "id": 9,
    "username": "ldollin1",
    "img": "https://robohash.org/temporenihilnumquam.png?size=50x50&set=set1",
    "status": 'true',
    "email": "kstollenwerck1@moonfruit.com",
    "age": 61
  }, {
    "id": 10,
    "username": "asamsworth2",
    "img": "https://robohash.org/quiaoptiorepudiandae.png?size=50x50&set=set1",
    "status": 'true',
    "email": "ktiernan2@xing.com",
    "age": 16
  },
  {
    "id": 11,
    "username": "tgwinnett3",
    "img": "https://robohash.org/aliquidautemnon.png?size=50x50&set=set1",
    "status": 'false',
    "email": "kstockow3@npr.org",
    "age": 33
  }, {
    "id": 12,
    "username": "tschimke4",
    "img": "https://robohash.org/minussedomnis.png?size=50x50&set=set1",
    "status": 'true',
    "email": "gcrufts4@nasa.gov",
    "age": 97
  },
  {
    "id": 13,
    "username": "lbrunotti0",
    "img": "https://robohash.org/perferendissapientecupiditate.png?size=50x50&set=set1",
    "status": 'true',
    "email": "rsheppey0@cnet.com",
    "age": 42
  }, {
    "id": 14,
    "username": "ldollin1",
    "img": "https://robohash.org/temporenihilnumquam.png?size=50x50&set=set1",
    "status": 'true',
    "email": "kstollenwerck1@moonfruit.com",
    "age": 61
  }, {
    "id": 15,
    "username": "asamsworth2",
    "img": "https://robohash.org/quiaoptiorepudiandae.png?size=50x50&set=set1",
    "status": 'true',
    "email": "ktiernan2@xing.com",
    "age": 16
  },
]