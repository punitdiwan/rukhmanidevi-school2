 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
 
const About = ({ about_data }) => {
    

    console.log(about_data)

    const aboutdata = [
        {
            body: "about school",
            heading: "About Us",
            images: [],
            title: "About  Demo"
        },
        {
            body: "details of memories",
            heading: "About memories",
            images: [],
            title: "About memories Demo"
        },
        {
            body: "details of our founder",
            heading: "About our founder",
            images: [],
            title: "Our founder Demo"
        }
    ]

    return (<div className='about'>

        <div className='container'>
            <Tabs>
                <div className='aboutnav'>
                    <TabList>
                        {about_data?.data?.length>0? about_data?.data.map((item, i) => {
                            return <Tab key={i}><button>{item.title}</button></Tab>
                        })
                        :
                        aboutdata.map((item, i) => {
                            return <Tab key={i}><button>{item.title}</button></Tab>
                        })
                    }

                    </TabList>
                </div>
                {about_data?.data?.length>0? about_data?.data.map((items, i) => {

                    return <TabPanel key={i}>
                        <div className='aemptydiv'>
                            <div className='info' style={{ display: 'flex' }}>
                                <div>
                                    <h3>{items?.heading}</h3>
                                    <p className='p'>{items?.body}</p>
                                </div>
                                <div style={{ width: '25%' }}>
                                    {items?.images?.map((img, index) => {
                                        return <div className='founderdiv' key={index}><img src={img?.directus_files_id?.data?.full_url} alt='now' width='250px' height='auto' /></div>
                                    })}
                                </div>
                            </div>


                        </div>
                    </TabPanel>
                }):
                aboutdata.map((items, i) => {

                    return <TabPanel key={i}>
                        <div className='aemptydiv'>
                            <div className='info' style={{ display: 'flex' }}>
                                <div>
                                    <h3>{items?.heading}</h3>
                                    <p className='p'>{items?.body}</p>
                                </div>
                                <div style={{ width: '25%' }}>
                                    {items?.images?.map((img, index) => {
                                        return <div className='founderdiv' key={index}><img src={img?.directus_files_id?.data?.full_url} alt='now' width='250px' height='auto' /></div>
                                    })}
                                </div>
                            </div>


                        </div>
                    </TabPanel>
                })
                
                
                }
            </Tabs>
        </div>
    </div>
    )
};
export default About
