import { useState, useCallback, useMemo, useEffect } from 'react';
import ReactFlow, { Background, Controls, applyNodeChanges, applyEdgeChanges, MiniMap } from 'reactflow';

import CustomEdgeLabel from './CustomEdgeLabel';


function Visualizer({ initialNodes, initialEdges }) {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const edgeTypes = useMemo(() => ({
        custom: CustomEdgeLabel,
    }),
        []
    );

    useEffect(() => {
        setNodes(initialNodes);
        setEdges(initialEdges);
    }, [initialNodes, initialEdges]);


    return (
        <>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                edgeTypes={edgeTypes}
            >
                <Background />
                <Controls />
                <MiniMap nodeColor={"#ffc107"} maskStrokeColor="black" maskStrokeWidth="3" pannable zoomable/>
            </ReactFlow>
        </>
    );
}

export default Visualizer
