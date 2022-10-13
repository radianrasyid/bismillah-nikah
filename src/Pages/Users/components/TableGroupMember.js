import * as React from 'react';
import {
    DataGrid,
    gridPaginationSelector,
    gridPageSizeSelector,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
// import { Link } from 'react-router-dom';
import { Button, FormControl, MenuItem, Select, IconButton, OutlinedInput } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { FiEdit, FiTrash } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
axios.defaults.withCredentials = true;

const Transition = React.forwardRef(function Transition(props, ref) { 
    return <Slide direction='up' ref={ref} {...props} />
})

const data = [
    {id: 1, nama: "Antibiotik"},
    {id: 2, nama: "Anti-Inflamasi"},
    {id: 3, nama: "Analgesik"},
    {id: 4, nama: "Obat Tidur"},
    {id: 5, nama: "Ekspektoran"},
    {id: 6, nama: "Antipiretik"},
    {id: 7, nama: "Antipsikotik"},
    {id: 8, nama: "Antihipertensi"},
    {id: 9, nama: "Antidiare"},
]

function customCheckbox(theme) {
    return {
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
                }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        'Poppins',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-toolbarContainer': {
        height: "5rem",
        flexDirection: "row-reverse"
    },
    '& .MuiDataGrid-columnHeaderTitleContainer':{
        justifyContent: "center"
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
        backgroundColor: "#bbdfc8",
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
            }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight: '600',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
        background: '#95dae1',
        color: 'white',
    },
    ...customCheckbox(theme),
}));

function CustomToolbar(props) {
    const [open, setOpen] = React.useState(false)
    const [type, setType] = React.useState(null)

    const handleOpenAdd = () => setOpen(true);
    const handleCloseAdd = () => setOpen(false);

    const handleClick = (e) => {
        props.setTablePage(e.target.value);
        if (props.counter < e.target.value) {
            props.setNewPageSize(props.counter);
        }
        else {
            props.setNewPageSize(e.target.value);
        }
    }

    const onSubmit = async(e) => {
        await axios.post("http://10.10.29.171:8000/MD/prod_type", {
            type
        })
    }

    // return (
    //     <GridToolbarContainer className='hms-gridtoolbar-container'>
    //         {/* <div className='hms-gridtoolbar-showdata'>
    //             <p className='me-2'>Show</p>
    //             <FormControl fullWidth className=''>
    //                 <Select
    //                     IconComponent={UnfoldMoreIcon}
    //                     value={props.tablePage}
    //                     onChange={(e) => handleClick(e)}
    //                     className="hms-small-textfield"
    //                 >
    //                     <MenuItem value={'10'}>10</MenuItem>
    //                     <MenuItem value={'25'}>25</MenuItem>
    //                     <MenuItem value={'50'}>50</MenuItem>
    //                     <MenuItem value={'75'}>75</MenuItem>
    //                     <MenuItem value={'100'}>100</MenuItem>
    //                 </Select>
    //             </FormControl>
    //             <p className='ms-2'>data</p>
    //         </div> */}
    //         <div className='d-flex'>
    //             <GridToolbarQuickFilter className='hms-form-quickcustom-mui me-2' />
    //             <GridToolbarFilterButton className='hms-btn-filtercustom-mui me-2' />
    //             <Dialog
    //                 open={open}
    //                 TransitionComponent={Transition}
    //                 keepMounted
    //                 fullWidth
    //                 maxWidth={"md"}
    //                 onClose={handleCloseAdd}
    //                 aria-describedby="alert-dialog-slide-description"
    //             >
    //                 <DialogTitle>{"Form Tambah Jenis Produk"}</DialogTitle>
    //                 <DialogContent>
    //                 <DialogContentText id="alert-dialog-slide-description">
    //                     <div>
    //                         <Row>
    //                             <Col>
    //                                 <p className='hms-text-label mb-2'>Nama Jenis Produk</p>
    //                             </Col>
    //                             <Col>
    //                                 <FormControl className='mb-3' variant='outlined' fullWidth>
    //                                     <OutlinedInput
    //                                     type="text"
    //                                     className='hms-small-textfield'
    //                                     placeholder='Antibiotik'
    //                                     onChange={(e) => setType(e.target.value)}
    //                                     />
    //                                 </FormControl>
    //                             </Col>
    //                         </Row>
    //                     </div>
    //                 </DialogContentText>
    //                 </DialogContent>
    //                 <DialogActions>
    //                 <Button onClick={handleCloseAdd}>Disagree</Button>
    //                 <Button onClick={onSubmit}>Agree</Button>
    //                 </DialogActions>
    //             </Dialog>
    //         </div>
    //     </GridToolbarContainer>
    // );
}

function CustomPagination(props) {
    const apiRef = useGridApiContext();
    const selector = useGridSelector(apiRef, gridPaginationSelector);
    const row = useGridSelector(apiRef, gridPageSizeSelector);
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const getSizePage = props.totalPage > props.counter ? props.counter : props.totalPage;

    return (
        <div className='hms-pagination-datagrid'>
            <div className='hms-pagination-datagrid-textfooter'>
                <p>Shorting {getSizePage} of {props.counter}</p>
            </div>
            <Pagination
                color="primary"
                page={page + 1}
                count={pageCount}
                showFirstButton
                showLastButton
                shape='circular'
                renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
                onChange={(event, value) => {
                    let updatePageSize;

                    if (value === pageCount) {
                        updatePageSize = selector.rowCount;
                    }
                    else {
                        updatePageSize = row * value;
                    }

                    apiRef.current.setPage(value - 1);
                    apiRef.current.setPageSize(updatePageSize);

                    if (value === 1) {
                        props.setTotalPage(row);
                    }
                }}
            />
            <div className='hms-pagination-datagrid-textfooter'>
                <p>Page {page + 1} of {pageCount}</p>
            </div>
        </div>
    );
}

export default function TableGroupMember() {

    const [data, setData] = React.useState([]);
    const [tablePage, setTablePage] = React.useState(10);
    const [id, setId] = React.useState("1");
    const [edit, setEdit] = React.useState(false)
    const [hapus, setHapus] = React.useState(false)
    const [type, setType] = React.useState(null);
    const [newPageSize, setNewPageSize] = React.useState(10);
    const [dataId, setDataId] = React.useState(null);
    const [add, setAdd] = React.useState(false)
    const navigate = useNavigate();

    const handleOpenEdit = () => setEdit(true);
    const handleCloseEdiit = () => setEdit(false);

    const handleOpenDelete = (props) => {
        setId(props);
        setHapus(true)
    };
    const handleCloseDelete = () => setHapus(false);

    const handleOpenAdd = () => setAdd(true);
    const handleCloseAdd = () => setAdd(false);

    const handleClickDetail = () => {
        navigate('/detail-produk-data-obat', { replace: true });
    }

    const onCreate = async(e) => {
        await axios.post("http://10.10.29.171:8000/MD/prod_type", {
            type
        })

        setAdd(false)
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        await axios.patch(`http://10.10.29.171:8000/MD/prod_type/${id}`, {
            type
        })

        setEdit(false)
    }

    const fetchProdType = async() => {
        await axios.get("http://10.10.29.171:8000/MD/prod_type")
        .then(async(res) => {
            let hasil = await res.data
            setData(hasil)
        })
    }

    const fetchProdId = async(id) => {
        await axios.get(`http://10.10.29.171:8000/MD/prod_type/${id}`)
        .then(async(res) => {
            let hasil = await res.data;
            setDataId(hasil);
        })
    }

    const onDelete = async(id) => {
        await axios.delete(`http://10.10.29.171:8000/MD/prod_type/${id}`)
        .then(() => {
            setHapus(false)
        })
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', hide: false },
        { field: 'type', headerName: 'Nama', flex: 2 },
        { field: 'performance', headerName: 'pembayaran', flex: 2 },
        {
            headerName: "Status", renderCell: (params) => {
                let link = `/${params.id}`
                return(
                    <>
                        <Row>
                            <Col>
                                <IconButton type="button" size="small" onClick={() => {
                                    setId(params.id)
                                    setEdit(true)
                                }}>
                                    <FiEdit/>
                                </IconButton>
                                {
                                    dataId.id !== null ? (
                                        <>
                                            <Dialog
                                                open={edit}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                fullWidth
                                                maxWidth={"md"}
                                                onClose={handleCloseEdiit}
                                                aria-describedby="alert-dialog-slide-description"
                                            >
                                                <DialogTitle>{"Form Tambah Jenis Produk"}</DialogTitle>
                                                <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                    <div>
                                                        <div>
                                                            <small>ini id {id}</small>
                                                        </div>
                                                        <Row>
                                                            <Col>
                                                                <p className='hms-text-label mb-2'>Nama Jenis Produk</p>
                                                            </Col>
                                                            <Col>
                                                                <FormControl className='mb-3' variant='outlined' fullWidth>
                                                                    <OutlinedInput
                                                                    type="text"
                                                                    className='hms-small-textfield'
                                                                    placeholder={dataId.type ? dataId.type : "Antibiotik"}
                                                                    onChange={(e) => setType(e.target.value)}
                                                                    />
                                                                </FormControl>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={handleCloseEdiit}>Disagree</Button>
                                                <Button onClick={onSubmit}>Agree</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </>
                                    ) : (
                                        <>
                                            <Dialog
                                                open={edit}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                fullWidth
                                                maxWidth={"md"}
                                                onClose={handleCloseEdiit}
                                                aria-describedby="alert-dialog-slide-description"
                                            >
                                                <DialogTitle>{"TERJADI KESALAHAN    "}</DialogTitle>
                                                <DialogContent>
                                                <DialogContentText id="alert-dialog-slide-description">
                                                    <div>
                                                        <Row>
                                                            <Col>
                                                                <p className='hms-text-label mb-2'>Nama Jenis Produk</p>
                                                            </Col>
                                                            <Col>
                                                                <FormControl className='mb-3' variant='outlined' fullWidth>
                                                                    <OutlinedInput
                                                                    type="text"
                                                                    className='hms-small-textfield'
                                                                    placeholder='Antibiotik'
                                                                    onChange={(e) => setType(e.target.value)}
                                                                    />
                                                                </FormControl>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={handleCloseEdiit}>Disagree</Button>
                                                <Button onClick={handleCloseEdiit}>Agree</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </>
                                    )
                                }
                            </Col>
                            <Col>
                                <IconButton type="button" size="small" onClick={() => {
                                    setId(params.id);
                                    setHapus(true)
                                }}>
                                    <FiTrash/>
                                </IconButton>
                                <Dialog
                                    open={hapus}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    fullWidth
                                    maxWidth={"md"}
                                    onClose={handleCloseDelete}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle>{"Anda akan menghapus item"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        <div>
                                            <Row>
                                                <Col>
                                                    <small>Item</small>
                                                </Col>
                                                <Col>
                                                    <small>: {dataId.type}</small>
                                                </Col>
                                            </Row>
                                        </div>
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleCloseDelete}>Disagree</Button>
                                    <Button onClick={onDelete(id)}>Agree</Button>
                                    </DialogActions>
                                </Dialog>
                            </Col>
                        </Row>
                    </>
                )
            }, flex: 2
        }
        // { 
        //     field: 'namaProduk', 
        //     headerName: 'Nama Produk', 
        //     flex: 4,
        //     renderCell: (params) => {
        //         return <p className='mb-0'>
        //             <Icon icon="healthicons:medicines-outline" className="me-2" style={{ color: "#322F2F" }} />
        //             <span className='fw-semibold'>{params.value}</span>
        //         </p>
        //     } 
        // },
        // { field: 'expiredDate', headerName: 'Expired Date', flex: 2 },
        // { field: 'hargaBeli', headerName: 'Harga Beli', flex: 2 },
        // { field: 'hargaJual', headerName: 'Harga Jual', flex: 2 },
        // { field: 'jumlah', headerName: 'Jumlah', type: 'number', flex: 1, align: 'center' },
        // { field: 'satuan', headerName: 'Satuan', flex: 1, align: 'center' },
        // { field: 'type', headerName: 'Type', flex: 2 },
        // { 
        //     field: 'action', 
        //     headerName: 'Action', 
        //     flex: 1,
        //     sortable: false,
        //     align: 'center',
        //     renderCell: (params) => {
        //         return <Button onClick={() => handleClickDetail()} variant='text' size='small' className="hms-btn hms-btn-link font-11 text-info">Detail</Button>
        //     } 
        // },
    ];

    const rows = [...Array(50)].map((data, index) => {
        var numb = index + 1;

        return {
            id: '3ggy2338h1byv3vj1oja' + numb,
            no: numb,
            codeItem: 'XX0' + numb,
            performance: 'Resep A',
            expiredDate: '23/08/2022',
            hargaBeli: 'Rp 3.000,00',
            hargaJual: 'Rp. 4.500,00',
            jumlah: 1150,
            satuan: 'BTL',
            type: 'Medication',
        }
    });
    
    React.useEffect(()=> {
        fetchProdType();
        fetchProdId(id)
    }, [id])

        return (
            <div>
                <StyledDataGrid
                    pageSize={tablePage}
                    rowsPerPageOptions={[10, 25, 50, 75, 100]}
                    components={{
                        Pagination: CustomPagination,
                        Toolbar: CustomToolbar
                    }}
                    componentsProps={{
                        pagination: { counter: data.length, totalPage: newPageSize, setTotalPage: setNewPageSize },
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                            setNewPageSize: setNewPageSize,
                            tablePage: tablePage,
                            setTablePage: setTablePage,
                            counter: data.length
                        },
                    }}
                    localeText={{
                        toolbarFilters: "Filter",
                        toolbarExport: "Print Data",
                        toolbarQuickFilterPlaceholder: "Mencari data customer"
                    }}
                    rows={data}
                    columns={columns}
                    autoHeight={true}
                    disableColumnMenu
                    checkboxSelection={false}
                    disableSelectionOnClick
                    onPageSizeChange={(totalPageSize) => setNewPageSize(totalPageSize)}
                    className="hms-table"
                />
            </div>
        );
    
}