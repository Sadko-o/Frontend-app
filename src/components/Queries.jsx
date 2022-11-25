import React from 'react'
import Tables from './Tables'
import { TabGroup } from '@statikly/funk'
const Queries = () => {
    const query01 = "https://backend-app-production-2791.up.railway.app/query01";
    const query02 = "https://backend-app-production-2791.up.railway.app/query02";
    const query03 = "https://backend-app-production-2791.up.railway.app/query03";
    const query04 = "https://backend-app-production-2791.up.railway.app/query04";
    const query05 = "https://backend-app-production-2791.up.railway.app/query05";
    const query06 = "https://backend-app-production-2791.up.railway.app/query06";
    const query07 = "https://backend-app-production-2791.up.railway.app/query07";
    const query08 = "https://backend-app-production-2791.up.railway.app/query08";
    const query09 = "https://backend-app-production-2791.up.railway.app/query09";
    const query10 = "https://backend-app-production-2791.up.railway.app/query10";
    const query11 = "https://backend-app-production-2791.up.railway.app/query11";

  return (
    <>
    <div>
    <Tables/>
    </div>
    
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <TabGroup numTabs={11} direction={TabGroup.direction.HORIZONTAL}>
        <TabGroup.TabList>
          <TabGroup.Tab
            index={0}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 1
          </TabGroup.Tab>
          <TabGroup.Tab
            index={1}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 2
          </TabGroup.Tab>
          <TabGroup.Tab
            index={2}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 3
          </TabGroup.Tab>
          <TabGroup.Tab
            index={3}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 4
          </TabGroup.Tab>
          <TabGroup.Tab
            index={4}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 5
          </TabGroup.Tab>
          <TabGroup.Tab
            index={5}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 6
          </TabGroup.Tab>
          <TabGroup.Tab
            index={6}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 7
          </TabGroup.Tab>
          <TabGroup.Tab
            index={7}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 8
          </TabGroup.Tab>
          <TabGroup.Tab
            index={8}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 9
          </TabGroup.Tab>
          <TabGroup.Tab
            index={9}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 10
          </TabGroup.Tab>

          <TabGroup.Tab
            index={10}
            className="h-12 px-8 transition-colors duration-150"
            activeClassName="bg-black text-white"
            inactiveClassName="text-black"
          >
            Query 11
          </TabGroup.Tab>
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          {query01}
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className="p-12 transition-all transform h-48 flex flex-col"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
            Content 2
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
            Content 3
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 4
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={4}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 5
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={5}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 6
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={6}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 7
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={7}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 8
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={8}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 9
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={9}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 10
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={10}
          className="p-12 transition-all transform h-48"
          activeClassName="opacity-100 duration-500 translate-x-0"
          inactiveClassName="absolute opacity-0 -translate-x-2"
        >
          Content 11
        </TabGroup.TabPanel>
      </TabGroup>
    
    </div>
    </>
  )
}

export default Queries