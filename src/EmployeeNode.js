import React from 'react'
import { useSelector } from 'react-redux';
import OrganizationChart from "@dabeng/react-orgchart"
import { useNavigate } from 'react-router-dom';

export default function EmployeeNode() {

  const direct = useNavigate()
  const currentUser = useSelector((state) => state.auth);
  const token = currentUser.token;
  const [loading, setLoading] = React.useState(null);
  const [referred, setReferred] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  let [activeChild, setActiveChild] = React.useState(null);
  const [program, setProgram] = React.useState(null);


  const fetchData = async(e) => {
    setLoading(true)
    await fetch("http://localhost:8000/api/v1/user/whoami", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async(response) => {
        let hasil = await response.json();
        setUserData(hasil.user);
        let userCurrent = await hasil.user.referrerId;

        setReferred(userCurrent);

        let activeMembers = userCurrent.map((item) => {
            if(item.status == 1 && item.currentPayment !== 0){
                return item;
            }else{
                return null
            }
        })
        setActiveChild(activeMembers)

        await fetch(`http://localhost:8000/api/v1/program/${hasil.user.ProgramId}`)
        .then(async(res) => {
            let result = await res.json();
            setProgram(result.data);
        })
    })
    setLoading(false)
}

React.useEffect(() => {
  fetchData()
}, [])

const childrens = referred.map((item, index) => {
  return { id: `${item.id}`, name: `${item.firstName} ${item.lastName}`}
})

console.log("INI ANAK",childrens);

const [state, setState] = React.useState({
  ds: {
    id: "1",
    name: currentUser.user,
    title: 'Leader',
    children: [
      { id: "2", name: "Bo Miao", title: "department manager" },
      {
        id: "3",
        name: "Su Miao",
        title: "department manager",
        children: [
          { id: "4", name: "Tie Hua", title: "senior engineer" },
          {
            id: "5",
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { id: "6", name: "Dan Dan", title: "engineer" },
              { id: "7", name: "Xiang Xiang", title: "engineer" }
            ]
          },
          { id: "8", name: "Pang Pang", title: "senior engineer" }
        ]
      },
      { id: "9", name: "Hong Miao", title: "department manager" },
      {
        id: "10",
        name: "Chun Miao",
        title: "department manager",
        children: [{ id: "11", name: "Yue Yue", title: "senior engineer" }]
      }
    ]
  },
})

state.ds.children = childrens

  return (
    <div>
      <OrganizationChart datasource={state.ds} onClickNode={(node) => direct(`/${node.id}`)} />
    </div>
  )
}
