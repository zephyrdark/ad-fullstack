package com.robotrader.spring.model;

import com.robotrader.spring.model.enums.PortfolioTypeEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private PortfolioTypeEnum portfolioType;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "rule_id")
    private Rule rule;

    @NotNull(message = "Amount cannot be null")
    @DecimalMin(value = "0", message = "Amount must be greater than or equal to 0")
    @DecimalMax(value = "1000000000.00", message = "Amount must be less than or equal to 1000000000.00")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal allocatedBalance;

    @NotNull(message = "Amount cannot be null")
    @DecimalMin(value = "0", message = "Amount must be greater than or equal to 0")
    @DecimalMax(value = "1000000000.00", message = "Amount must be less than or equal to 1000000000.00")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal currentValue;

    @DecimalMin(value = "0", message = "Amount must be greater than or equal to 0")
    @Column(nullable = false, precision = 16, scale = 4)
    private BigDecimal allocatedUnitQty;

    public Portfolio() {
        this.allocatedBalance = new BigDecimal(0);
        this.allocatedUnitQty = new BigDecimal(0);
        this.currentValue = new BigDecimal(0);
    }

}
