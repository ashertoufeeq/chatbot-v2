
import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

import { PlasmicComponent, ComponentRenderData } from "@plasmicapp/loader-react";
import { PLASMIC } from './plasmic-init';


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
      return <div>Loading...</div>;
    }
    if (!pageData) {
      return <div>Not found</div>;
    }
    // The page will already be cached from the `load` call above.
    return <PlasmicComponent component={location.pathname} />;
  }