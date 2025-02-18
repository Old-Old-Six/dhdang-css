import { useState } from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';

export const Home = () => {
    const [layout, setLayout] = useState('float');

    const handleChange = (event) => {
        setLayout(event.target.value);
    };

    const FloatLayout = () => (
        <Box sx={{ overflow: 'hidden' }}>
            <Box sx={{ float: 'left', width: '200px', bgcolor: '#e0e0e0', p: 2 }}>左侧栏</Box>
            <Box sx={{ float: 'right', width: '200px', bgcolor: '#e0e0e0', p: 2 }}>右侧栏</Box>
            <Box sx={{ margin: '0 210px', bgcolor: '#f5f5f5', p: 2 }}>主要内容区域</Box>
        </Box>
    );

    const PositionLayout = () => (
        <Box sx={{ position: 'relative', height: '300px' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100px', bgcolor: '#e0e0e0', p: 2 }}>左上角</Box>
            <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: '100px', bgcolor: '#e0e0e0', p: 2 }}>右下角</Box>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#f5f5f5', p: 2 }}>居中内容</Box>
        </Box>
    );

    const FlexboxLayout = () => (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1, bgcolor: '#e0e0e0', p: 2 }}>项目1</Box>
            <Box sx={{ flex: 2, bgcolor: '#f5f5f5', p: 2 }}>项目2</Box>
            <Box sx={{ flex: 1, bgcolor: '#e0e0e0', p: 2 }}>项目3</Box>
        </Box>
    );

    const GridLayout = () => (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            <Box sx={{ bgcolor: '#e0e0e0', p: 2 }}>网格1</Box>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>网格2</Box>
            <Box sx={{ bgcolor: '#e0e0e0', p: 2 }}>网格3</Box>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>网格4</Box>
            <Box sx={{ bgcolor: '#e0e0e0', p: 2 }}>网格5</Box>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>网格6</Box>
        </Box>
    );

    const MultiColumnLayout = () => (
        <Box sx={{ columnCount: 3, columnGap: '20px', p: 2 }}>
            <Typography>
                这是一段长文本，用于演示多列布局效果。这是一段长文本，用于演示多列布局效果。
                这是一段长文本，用于演示多列布局效果。这是一段长文本，用于演示多列布局效果。
                这是一段长文本，用于演示多列布局效果。这是一段长文本，用于演示多列布局效果。
                这是一段长文本，用于演示多列布局效果。这是一段长文本，用于演示多列布局效果。
            </Typography>
        </Box>
    );

    const ResponsiveLayout = () => (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr'
            },
            gap: 2
        }}>
            <Box sx={{ bgcolor: '#e0e0e0', p: 2 }}>响应式1</Box>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>响应式2</Box>
            <Box sx={{ bgcolor: '#e0e0e0', p: 2 }}>响应式3</Box>
        </Box>
    );

    const HolyGrailLayout = () => (
        <Box sx={{ display: 'flex', minHeight: '300px' }}>
            <Box sx={{ width: '200px', bgcolor: '#e0e0e0', p: 2 }}>左侧栏</Box>
            <Box sx={{ flex: 1, bgcolor: '#f5f5f5', p: 2 }}>主要内容</Box>
            <Box sx={{ width: '200px', bgcolor: '#e0e0e0', p: 2 }}>右侧栏</Box>
        </Box>
    );

    const DoubleFlyingWingsLayout = () => (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ margin: '0 210px', bgcolor: '#f5f5f5', p: 2 }}>
                <Box sx={{ width: '100%' }}>主要内容</Box>
            </Box>
            <Box sx={{ position: 'absolute', left: 0, top: 0, width: '200px', bgcolor: '#e0e0e0', p: 2 }}>左侧栏</Box>
            <Box sx={{ position: 'absolute', right: 0, top: 0, width: '200px', bgcolor: '#e0e0e0', p: 2 }}>右侧栏</Box>
        </Box>
    );

    const FrameworkLayout = () => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {[1, 2, 3, 4].map(i => (
                <Box key={i} sx={{ flexBasis: 'calc(25% - 16px)', bgcolor: i % 2 ? '#e0e0e0' : '#f5f5f5', p: 2 }}>
                    框架布局 {i}
                </Box>
            ))}
        </Box>
    );

    const CssVarCalcLayout = () => {
        const styles = {
            '--base-width': '100px',
            '--spacing': '20px'
        };

        return (
            <Box sx={{ ...styles }}>
                <Box sx={{ 
                    width: 'calc(var(--base-width) * 2 + var(--spacing))',
                    bgcolor: '#e0e0e0',
                    p: 2,
                    mb: 2
                }}>
                    计算宽度的元素
                </Box>
                <Box sx={{ 
                    width: 'calc(var(--base-width) * 3 + var(--spacing) * 2)',
                    bgcolor: '#f5f5f5',
                    p: 2
                }}>
                    更宽的元素
                </Box>
            </Box>
        );
    };

    const layouts = {
        float: <FloatLayout />,
        position: <PositionLayout />,
        flexbox: <FlexboxLayout />,
        grid: <GridLayout />,
        multiColumn: <MultiColumnLayout />,
        responsive: <ResponsiveLayout />,
        holyGrail: <HolyGrailLayout />,
        doubleFlyingWings: <DoubleFlyingWingsLayout />,
        framework: <FrameworkLayout />,
        cssVarCalc: <CssVarCalcLayout />
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
                <Select value={layout} onChange={handleChange} sx={{ width: '300px' }}>
                    <MenuItem value="float">浮动布局</MenuItem>
                    <MenuItem value="position">定位布局</MenuItem>
                    <MenuItem value="flexbox">弹性盒子布局</MenuItem>
                    <MenuItem value="grid">网格布局</MenuItem>
                    <MenuItem value="multiColumn">多列布局</MenuItem>
                    <MenuItem value="responsive">响应式布局</MenuItem>
                    <MenuItem value="holyGrail">圣杯布局</MenuItem>
                    <MenuItem value="doubleFlyingWings">双飞翼布局</MenuItem>
                    <MenuItem value="framework">框架布局</MenuItem>
                    <MenuItem value="cssVarCalc">CSS变量与计算布局</MenuItem>
                </Select>
            </Box>

            <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    {layout === 'float' && '浮动布局（Float Layout）通过float属性实现元素浮动，常用于多栏布局。需清除浮动以避免布局问题，常用clearfix方法。'}
                    {layout === 'position' && '定位布局（Position Layout）使用position属性（如relative、absolute、fixed）进行元素定位。适合需要精确控制元素位置的场景。'}
                    {layout === 'flexbox' && '弹性盒子布局（Flexbox Layout）通过display: flex创建弹性容器，子元素可灵活调整大小和位置。适合一维布局，如导航栏、卡片布局等。'}
                    {layout === 'grid' && '网格布局（Grid Layout）使用display: grid创建网格容器，适合复杂的二维布局。提供更精细的布局控制，适合多列多行布局。'}
                    {layout === 'multiColumn' && '多列布局（Multi-column Layout）通过column-count和column-gap等属性实现多列文本布局。常用于新闻、杂志等文本密集型页面。'}
                    {layout === 'responsive' && '响应式布局（Responsive Layout）使用媒体查询（@media）根据不同屏幕尺寸调整布局。确保页面在不同设备上都能良好显示。'}
                    {layout === 'holyGrail' && '圣杯布局（Holy Grail Layout）一种经典的三栏布局，中间栏自适应宽度，两侧栏固定宽度。通常结合浮动、定位和负边距实现。'}
                    {layout === 'doubleFlyingWings' && '双飞翼布局（Double Flying Wings Layout）圣杯布局的变种，通过额外容器包裹中间内容，避免布局问题。同样结合浮动和负边距实现。'}
                    {layout === 'framework' && 'CSS框架布局（CSS Framework Layout）使用Bootstrap、Foundation等CSS框架提供的栅格系统和组件快速构建布局。适合快速开发和响应式设计。'}
                    {layout === 'cssVarCalc' && 'CSS变量与计算布局（CSS Variables and Calc Layout）使用CSS变量（--var）和calc()函数进行动态布局计算。提供更灵活的布局方式，适合复杂场景。'}
                </Typography>
            </Box>
            
            <Box sx={{ border: 1, borderColor: 'grey.300', p: 2 }}>
                {layouts[layout]}
            </Box>
            
        </Box>
    );
};
