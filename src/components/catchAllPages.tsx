
import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

import { PlasmicComponent, ComponentRenderData } from "@plasmicapp/loader-react";
import { PLASMIC } from './plasmic-init';
import { Spin } from 'antd';


export function CatchAllPage() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState<ComponentRenderData | null>(null);
  
    useEffect(() => {
      async function load() {
        const pageData = await PLASMIC.maybeFetchComponentData(location.pathname);
        setPageData(pageData);
        setLoading(false);
      }
      load();
    }, []);
  
    if (loading) {
      return <div style={{width: '100vw', height: '100vh', display:'flex', justifyContent: 'center' , alignItems: 'center'}}><Spin/></div>;
    }
    if (!pageData) {
      return <div>Not found</div>;
    }
    // The page will already be cached from the `load` call above.
    return <PlasmicComponent component={location.pathname} />;
  }