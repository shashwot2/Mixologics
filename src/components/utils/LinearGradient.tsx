import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import { Svg, Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientText = ({ children, style, textStyle }) => {
  const textWidth = children.length * 10; 

  return (
    <Svg height="40" width={textWidth} style={[styles.svgBase, style]}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0" stopColor="#FF34D3" stopOpacity="1" />
          <Stop offset="1" stopColor="#0094FF" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <SvgText
        fill="url(#grad)"
        fontSize="16"
        fontWeight="bold"
        x="50%"
        y="20"
        textAnchor="middle"
        alignmentBaseline="middle"
        style={[styles.textBase, textStyle]}  
      >
        {children}
      </SvgText>
    </Svg>
  );
};

const styles = StyleSheet.create({
  svgBase: {
  },
  textBase: {
    fontFamily:'Roboto',
    fontSize:16,
  }
});

export default GradientText;
