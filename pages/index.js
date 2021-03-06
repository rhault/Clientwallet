import fetch from 'isomorphic-unfetch';
import {useState, useEffect} from 'react'
import { 
    Avatar, Box, Card, CardHeader, CardContent, Grid, List, ListItem, ListItemAvatar, 
    ListItemButton, ListItemText, Tab, Tabs,Typography} 
from '@mui/material';
import TableComp from './componentes/TableComp'

const Home = () => {
    const [selectClient, setSelectClient] = useState([]);
    const [value, setValue] = useState(0);
    const [listClient, setListClient] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetch('http://localhost:3001/api/clients')
        .then((res) =>  res.json())
        .then(({data}) => {
            setSelectClient(data[0])
            setListClient(data)
            
        })
    }, [])

    const TabPanel = (props) => {
        const { children, value, index} = props;

        return (
            <div hidden={value !== index}>
                {value === index && (<Box sx={{ p: 3 }}>{children}</Box>)}
            </div>
        );
    }
  
    return(
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <h1>Carteira de Clientes</h1>  
                    {listClient.map(client => (
                        <div key={client._id}>{client.nome}</div>
                    ))}
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main mailbox folders">
                            <List>  
                                {selectClient && listClient.map((client) => (
                                   <ListItem disablePadding key={client._id} onClick={() => {setSelectClient(client)}}>
                                    <ListItemButton selected={selectClient._id === client._id}>
                                            <ListItemAvatar>
                                                <Avatar>{client.nome.charAt()}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={client.nome}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}   
                            </List>
                        </nav>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    
                    {selectClient && <Grid container justifyContent="center">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Detalhes"  />
                                    <Tab label="Contato"  />
                                    <Tab label="Historial"/>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Card>
                                    <CardHeader
                                        avatar={<Avatar>{selectClient.nome.charAt()}</Avatar>}
                                        title={selectClient.nome}
                                        subheader={selectClient.data}
                                    />
                                    <CardContent>
                                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                            <Grid item  xs={2} sm={4} md={4}>
                                                <Typography>Clinica</Typography>
                                                <Typography>nome</Typography>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Typography>Telefone</Typography>
                                                <Typography>{selectClient.telefone}</Typography>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Typography>email</Typography>
                                                <Typography>{selectClient.email}</Typography>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Typography>Tipo de cliente</Typography>
                                                <Typography>Tipo</Typography>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Typography>Periodicidade</Typography>
                                                <Typography>Tipo</Typography>
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={4}>
                                                <Typography>Ultima compra</Typography>
                                                <Typography>data</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card> 
                                <TableComp></TableComp>                            
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                        </Box>
                    </Grid>}
                </Grid>
            </Grid>
        </>
    );
}

/* Home.getInitialProps = async () => {
    const res = await fetch('http://localhost:3001/api/clients');
    const { data } = await res.json();
  
    return { clients: data }
}
 */
export default Home