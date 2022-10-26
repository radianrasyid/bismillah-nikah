import React from 'react'
import { useSelector } from 'react-redux';
import OrganizationChart from "@dabeng/react-orgchart"
import { useNavigate } from 'react-router-dom';

export default function EmployeeNodeAll() {

  const direct = useNavigate()
  const currentUser = useSelector((state) => state.auth);
  const [childs, setChilds] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const token = currentUser.token;
  const [leaders, setLeaders] = React.useState([]);


  const fetchData = async(e) => {
    setLoading(true)
    await fetch("https://umrohwebsite.herokuapp.com/api/v1/leaders", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${currentUser.token}`
      }
    })
    .then(async(res) => {
      let hasil = await res.json();
      let hasilData = await hasil.data;

      // console.log("INI HASIL FETCHING", hasilData);

      let hasilmapping = await hasilData.map((item, index) => {
        let children = [];
        item.referrerId.map((child, i) => {
            children.push({id: `${child.id}`, name: `${child.firstName} ${child.lastName}`, title: `MEMBER-${i+1}`})
        })
        return {id: `${item.id}`, name: `${item.firstName} ${item.lastName}`, children: children, title: "LEADER"}
      })
      setChilds(hasilmapping)
      // console.log("INI HASIL MAPPING", hasilmapping);
    })
    setLoading(false)
}

React.useEffect(() => {
  fetchData()
}, [])

// const childrens = referred.map((item, index) => {
//   return { id: `${item.id}`, name: `${item.firstName} ${item.lastName}`}
// })

// console.log("INI ANAK",childrens);

let news = childs.map((item) => {
  return item
})

const [state, setState] = React.useState({
  ds: {
    id: "1",
    name: "HRB SINERGI",
    title: 'COMPANY',
    children: childs.map((item) => {
      return item
    })
  },
})

let datasource = {
  ds: {
    id: "1",
    name: "HRB SINERGI",
    title: 'COMPANY',
    children: childs.map((item) => {
      return item
    })
  },
}

// state.ds.children = childrens
console.log("INI HASIL MAPPING CHILD", news);

  if(loading == false){
    return (
      <div>
        <OrganizationChart datasource={datasource.ds} onClickNode={(node) => direct(`/${node.id}`)} />
      </div>
    )
  }
}
